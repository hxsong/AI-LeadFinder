# 多BOT工作台

> **最后更新**：2026-05-06
> **关联文档**：
>   - [模块设计](../02-modules/01-租户服务开通.md)
>   - [原型页面](../03-prototypes/pages/多BOT工作台.html)
>   - [功能说明-上游](../04-specs/租户资源充值-说明.md)
>   - [功能说明-下游](../04-specs/业务初始化-说明.md)

---

## 概述

多BOT工作台是企业管理员（EBA）登录后的首个指挥中心，聚合展示全局资源（BOT 席位、Global Credits）和各获客引擎实例的运行状态，提供快速进入各业务模块的入口，并支持创建新的 BOT 实例。

---

## 数据契约

| 前端展示字段 | 后端字段名 | 类型 | 来源/存储 | 说明 |
|-------------|-----------|------|----------|------|
| Global Credits 余额 | global_credits_balance | number | 接口返回 | 全账号名共享资金池余额 |
| BOT 席位（已用） | bot_seats_used | number | 接口返回 | 当前 BOT 实例数 |
| BOT 席位（总计） | bot_seats_total | number | 接口返回 | 总额度 |
| 可用 BOT 席位 | bot_seats_available | number | 接口返回 | 剩余可创建数量 |
| 当前活跃 BOT | current_active_bot_id | string | 本地存储 | 前端状态管理 |
| BOT ID | bot_id | string | 系统生成 | 系统生成 |
| BOT 名称 | bot_name | string | 用户输入 | 用户创建时定义 |
| BOT 状态 | status | string | 接口返回 | running / initializing / failed |
| 静态线索数 | static_leads_count | number | 接口返回 | 静态线索池汇总 |
| 动态线索数 | dynamic_leads_count | number | 接口返回 | 动态线索池汇总 |
| Credits 消耗 | credits_consumed | number | 接口返回 | 该 BOT 累计消耗 |
| 创建时间 | created_at | string | 接口返回 | ISO 8601 时间戳 |

---

## 页面流转

### 入口定义

| 来源页面 | 触发条件 | 携带参数 |
|---------|---------|---------|
| 登录页 | 登录成功后自动跳转 | - |

### 出口定义

| 目标页面 | 触发条件 | 携带数据 |
|---------|---------|---------|
| 业务初始化.html | 点击 [+ 创建新 BOT]（无 BOT 时）或点击未初始化 BOT | `bot_id` |
| 业务初始化.html | 点击 [+ 创建新 BOT]（有 BOT 额度时） | `bot_id` |
| 访客雷达.html | 点击侧边栏"访客雷达" | `bot_id` |
| 静态线索池.html | 点击侧边栏"静态线索池" | `bot_id` |
| 动态线索池.html | 点击侧边栏"动态线索池" | `bot_id` |

### 页面状态及流转条件

```
[加载中] --(数据加载成功)--> [正常]
[正常] --(点击创建新 BOT)--> [创建中]
[创建中] --(创建成功)--> [初始化中]
[初始化中] --(初始化完成)--> [跳转至业务初始化]
[初始化中] --(初始化失败)--> [正常]
[正常] --(额度不足)--> [额度不足]
```

| 状态 | 触发条件 | UI 表现 |
|-----|---------|---------|
| 正常 | 数据完整返回 | 展示工作台 dashboard |
| 加载中 | 请求发出后 | 骨架屏或 loading 动画 |
| 创建中 | BOT 创建请求发出 | 创建表单 loading |
| 初始化中 | 轮询初始化状态 | 进度提示 + 禁止操作 |
| 额度不足 | bot_seats_available = 0 | 创建卡片置灰禁用 |

---

## 数据流

### API 一：获取工作台数据

```
GET /api/v1/tenant/workspace
```

**请求头**：`Authorization: Bearer {tenant_token}`

**请求参数**：无

**响应结构**：

```json
{
  "code": 200,
  "data": {
    "global_credits_balance": 35000,
    "bot_seats_used": 1,
    "bot_seats_total": 3,
    "bot_seats_available": 2,
    "bots": [
      {
        "bot_id": "BOT-001",
        "bot_name": "北美区-户外屏主站",
        "status": "running",
        "static_leads_count": 48,
        "dynamic_leads_count": 12,
        "credits_consumed": 850,
        "created_at": "2024-01-10T09:00:00Z"
      }
    ]
  }
}
```

**字段映射**：

| 响应字段 | 前端展示字段 | 类型 | 说明 |
|---------|-------------|------|------|
| global_credits_balance | Global Credits 余额 | number | 全账号名共享资金池余额 |
| bot_seats_used | BOT 席位（已用） | number | 当前 BOT 实例数 |
| bot_seats_total | BOT 席位（总计） | number | 总额度 |
| bot_seats_available | 可用 BOT 席位 | number | 剩余可创建数量 |
| bots[].bot_id | BOT ID | string | 系统生成 |
| bots[].bot_name | BOT 名称 | string | 用户创建时定义 |
| bots[].status | BOT 状态 | string | running / initializing / failed |
| bots[].static_leads_count | 静态线索数 | number | 静态线索池汇总 |
| bots[].dynamic_leads_count | 动态线索数 | number | 动态线索池汇总 |
| bots[].credits_consumed | Credits 消耗 | number | 该 BOT 累计消耗 |
| bots[].created_at | 创建时间 | string | ISO 8601 时间戳 |

**响应码说明**：

| 响应码 | 说明 | 处理方式 |
|-------|------|---------|
| 200 | 成功 | 正常渲染工作台 dashboard |
| 401 | 未登录 | 跳转登录页面，Toast「请先登录」 |
| 403 | 无权限 | Toast「无权限执行此操作」 |
| 500 | 服务异常 | Toast「服务暂时不可用，请稍后再试」 |

### API 二：创建 BOT

```
POST /api/v1/bot/create
```

**请求头**：`Authorization: Bearer {tenant_token}`

**请求体**：

```json
{
  "bot_name": "欧洲区-LED显示屏"
}
```

**请求参数**：

| 参数名 | 类型 | 必填 | 说明 |
|-------|------|------|------|
| bot_name | string | 是 | BOT 名称 |

**响应结构**：

```json
{
  "code": 200,
  "data": {
    "bot_id": "BOT-002",
    "bot_name": "欧洲区-LED显示屏",
    "status": "initializing"
  }
}
```

**字段映射**：

| 响应字段 | 前端展示字段 | 类型 | 说明 |
|---------|-------------|------|------|
| bot_id | BOT ID | string | 新创建 BOT 的唯一标识 |
| bot_name | BOT 名称 | string | BOT 名称 |
| status | BOT 状态 | string | initializing |

**响应码说明**：

| 响应码 | 说明 | 处理方式 |
|-------|------|---------|
| 200 | 成功 | 开始轮询初始化状态 |
| 400 | 参数错误 | Toast「BOT 名称不能为空」 |
| 403 | 无额度 | Toast「BOT 席位已用完，请联系销售扩充」 |
| 500 | 创建失败 | Toast「BOT 创建失败，请稍后重试」 |

### API 三：轮询 BOT 初始化状态

```
GET /api/v1/bot/{bot_id}/init-status
```

**请求头**：`Authorization: Bearer {tenant_token}`

**请求参数**：

| 参数名 | 类型 | 必填 | 说明 |
|-------|------|------|------|
| bot_id | string | 是 | 路径参数，BOT ID |

**响应结构**：

```json
{
  "code": 200,
  "data": {
    "bot_id": "BOT-002",
    "status": "initialized",
    "message": "BOT 初始化完成"
  }
}
```

**字段映射**：

| 响应字段 | 前端展示字段 | 类型 | 说明 |
|---------|-------------|------|------|
| bot_id | BOT ID | string | BOT 唯一标识 |
| status | 初始化状态 | string | initializing / initialized / failed |
| message | 状态消息 | string | 状态描述文本 |

**响应码说明**：

| 响应码 | 说明 | 处理方式 |
|-------|------|---------|
| 200 | 成功 | 根据 status 决定下一步操作 |
| 401 | 未登录 | 跳转登录页面 |
| 404 | BOT 不存在 | Toast「BOT 不存在」 |

---

## 处理逻辑

### 场景一：查看全局资源看板

**触发条件**：管理员进入工作台。

**执行逻辑**：
1. 页面加载时调用工作台数据接口
2. 展示全局 Credits 余额（全账号名共享资金池）
3. 展示 BOT 席位使用情况（已创建 / 总额度）
4. 展示 BOT 实例列表，每个卡片显示：名称、状态、累计线索数、Credits 消耗

**边界条件**：
- 若无可授权站点，显示空态引导文案
- 未上线站点可选但显示警告提示

**状态变更**：`加载中` → `正常`

**输出**：完整工作台 dashboard。

### 场景二：创建新 BOT 实例

**触发条件**：管理员点击 [+ 创建新 BOT] 占位卡片。

**执行逻辑**：
1. 前端检测 BOT 席位是否充足（bot_seats_available > 0）
2. 若额度充足，弹出创建表单，输入 BOT 名称
3. 提交后调用创建接口，返回 bot_id
4. 前端轮询 bot 初始化状态（GET /api/v1/bot/{bot_id}/init-status，间隔 2 秒）
5. 初始化成功（status = initialized）后跳转业务初始化页面

**边界条件**：
- bot_seats_available = 0 时，创建卡片置灰禁用
- 轮询超时（2 分钟）需提示超时
- 初始化失败需显示重试按钮

**状态变更**：`正常` → `创建中` → `初始化中` → 跳转至业务初始化

**输出**：新 BOT 创建成功，跳转至业务初始化。

### 场景三：进入已有 BOT 工作空间

**触发条件**：管理员点击已有 BOT 卡片的 [进入获客引擎]。

**执行逻辑**：
1. 前端将 current_active_bot_id 设置为选中的 bot_id
2. 此后该用户所有操作被严格锁定在该 BOT 的数据作用域内
3. 不同 BOT 的配置互不交叉污染

**边界条件**：
- 必须确保 current_active_bot_id 持久化（localStorage/sessionStorage）

**状态变更**：无状态变更，仅切换上下文

**输出**：进入目标 BOT 的工作空间，侧边栏模块均使用该 BOT 的数据。

### 场景四：BOT 状态自动同步

**触发条件**：BOT 对应的动态数据探针运行状态变化。

**执行逻辑**：
1. 状态判断以动态数据获客（JS 探针）运行状态为准
2. 最近 500 次上报中错误率恢复至 ≤5%，自动重置为"正常运行"
3. 24 小时内恢复数据上报，自动重置为"正常运行"
4. 无需人工干预，状态自动同步

**边界条件**：
- 探针完全断线超过 24 小时，状态标记为"异常"

**状态变更**：根据探针健康度自动更新 BOT 卡片状态

**输出**：BOT 卡片状态标签实时反映探针健康度。

### 场景五：购买更多算力

**触发条件**：管理员点击"购买更多算力"按钮。

**执行逻辑**：
1. 弹出【购买更多算力】模态框
2. 提示"请联系销售或客服人员"，显示官网联系方式
3. 不直接跳转支付，引导线下联系

**边界条件**：
- 模态框需有关闭按钮

**状态变更**：无

**输出**：展示联系引导模态框。

---

## 异常兜底

| 异常场景 | 检测方式 | 后端处理 | 前端表现 |
|---------|---------|---------|---------|
| BOT 创建失败 | code 非 200 | 返回对应错误码 | 失败提示，Toast「BOT 创建失败，请稍后重试」 |
| BOT 初始化失败 | status = failed | 返回 failed 状态 | 失败提示 + 重试按钮，Toast「BOT 初始化失败，请重试」 |
| 初始化超时 | 轮询超时（2 分钟） | 无 | 超时提示，Toast「BOT 初始化超时，请稍后重试」 |
| 无 BOT 额度 | bot_seats_available = 0 | 返回 403 | 创建卡片禁用，Toast「BOT 席位已用完，请联系销售扩充」 |
| 网络超时 | 请求超时 | 返回 504 | Toast「网络连接异常，请检查网络后重试」 |
| 服务不可用 | code 500 | 返回 500 | 全局错误处理，Toast「服务暂时不可用，请稍后再试」 |
| 未登录 | code 401 | 返回 401 | 跳转登录页面，Toast「请先登录」 |
