# 多BOT工作台

> **最后更新**：2026-06-23（去除 Credits 资源包，AI 积分统一使用 Moli AI 点数）
> **关联文档**：
>   - [模块设计](../02-modules/01-租户服务开通.md)
>   - [原型页面](../03-prototypes/pages/多BOT工作台.html)
>   - [功能说明-下游](../04-specs/业务初始化-说明.md)

---

## 数据契约

### 工作台数据契约

| 前端展示字段 | 后端字段名 | 类型 | 来源/存储 | 说明 |
|-------------|-----------|------|----------|------|
| Global MoliAI点数余额 | `moli_ai_balance` | `number` | 接口返回 | 全账号共享资金池余额 |
| BOT 席位（已用） | `bot_seats_used` | `number` | 接口返回 | 当前 BOT 实例数 |
| BOT 席位（总计） | `bot_seats_total` | `number` | 接口返回 | 租户购买的 BOT 席位总额度 |
| 可用 BOT 席位 | `bot_seats_available` | `number` | 接口返回 | 服务端计算：bot_seats_total - bot_seats_used |
| BOT ID | `bot_id` | `string` | 系统生成 | 格式 `BOT-{timestamp}-{random(4位)}` |
| BOT 名称 | `bot_name` | `string` | 用户输入 | 用户创建时定义，长度 2-50 字符 |
| BOT 状态 | `status` | `string` | 接口返回 | 枚举值：running / failed / undeployed |
| 业务画像状态 | `icp_status` | `string` | 接口返回 | 枚举值：pending / completed |
| 静态线索数 | `static_leads_count` | `number` | 接口返回 | 静态线索池汇总数量 |
| 动态线索数 | `dynamic_leads_count` | `number` | 接口返回 | 动态线索池汇总数量 |
| MoliAI点数消耗 | `moli_ai_consumed` | `number` | 接口返回 | 该 BOT 累计消耗的 MoliAI点数 |
| 创建时间 | `created_at` | `string` | 接口返回 | ISO 8601 时间戳 |
| 当前活跃 BOT | `current_active_bot_id` | `string` | 本地存储 | 前端状态管理，存储于 localStorage，键名 `current_active_bot_id` |

### 数据来源深度说明

| 前端展示字段 | 后端字段名 | 类型 | 来源/存储 | 说明（含技术处理逻辑） |
|-------------|-----------|------|----------|------------------------|
| Global MoliAI点数余额 | `moli_ai_balance` | `number` | 接口返回 | 从 `tenant_configs` 表 `moli_ai_balance` 字段查询，全账号共享资金池余额 |
| BOT 席位（已用） | `bot_seats_used` | `number` | 接口返回 | 从 `bots` 表统计 `tenant_id` 对应的记录数，计算 `COUNT(*)` |
| BOT 席位（总计） | `bot_seats_total` | `number` | 接口返回 | 从 `tenant_configs` 表 `bot_seats_total` 字段查询 |
| 可用 BOT 席位 | `bot_seats_available` | `number` | 系统生成 | 服务端计算：`bot_seats_total - bot_seats_used` |
| BOT ID | `bot_id` | `string` | 系统生成 | 系统生成，格式 `BOT-{timestamp}-{random(4位)}` |
| BOT 状态 | `status` | `string` | 接口返回 | 动态数据探针 24 小时内正常上报数据为 `running`，未上报为 `failed`，从未插入探针为 `undeployed` |
| 业务画像状态 | `icp_status` | `string` | 接口返回 | BOT 创建后尚未完成业务画像初始化为 `pending`，已完成为 `completed` |
| 静态线索数 | `static_leads_count` | `number` | 接口返回 | 从 `leads_static` 表实时统计 `COUNT(*)`，按 `bot_id` 分组 |
| 动态线索数 | `dynamic_leads_count` | `number` | 接口返回 | 从 `leads_dynamic` 表实时统计 `COUNT(*)`，按 `bot_id` 分组 |
| MoliAI点数消耗 | `moli_ai_consumed` | `number` | 接口返回 | 从 `bot_moli_ai_logs` 表统计该 BOT 累计消耗，计算 `SUM(amount)` |
| 创建时间 | `created_at` | `string` | 接口返回 | 从 `bots` 表 `created_at` 字段查询，ISO 8601 时间戳 |

### 状态枚举定义

**BOT 状态定义**：

| 状态值 | 说明 | 判断逻辑 |
|-------|------|---------|
| running | 正常运行 | 动态数据探针 24 小时内正常上报数据 |
| failed | 运行异常 | 动态数据探针 24 小时内未上报数据 |
| undeployed | 未部署 | 未插入动态数据获客脚本，无探针记录 |

**业务画像状态定义**：

| 状态值 | 说明 | 判断逻辑 |
|-------|------|---------|
| pending | 待初始化 | BOT 创建后尚未完成业务画像初始化 |
| completed | 已完成 | 已完成业务画像初始化，可进入搜客流程 |

---

## 页面流转

### 入口

| 来源 | 触发条件 | 携带参数 |
|------|---------|---------|
| 登录页 | 登录成功后自动跳转 | - |

**入口前置条件**：用户已完成登录认证，持有有效的 `tenant_token`

### 出口

| 目标 | 触发条件 | 携带数据 |
|------|---------|---------|
| 业务初始化.html | 点击 BOT 卡片，且该 BOT 的 `icp_status` = pending | `bot_id` |
| 搜客需求输入.html | 点击 BOT 卡片，且该 BOT 的 `icp_status` = completed | `bot_id`（同时写入 localStorage） |

### 页面状态

| 状态 | 说明 | 进入条件 | 退出条件 |
|------|------|---------|---------|
| 加载中 | 数据请求中 | 页面初始化，请求发出后 | 数据加载成功或失败 |
| 正常 | 数据完整展示 | 数据加载成功 | 用户触发其他操作 |
| 空状态 | 无 BOT 实例 | bots 列表为空 | 创建新 BOT 成功后 |
| 错误状态 | 数据加载失败 | 接口返回错误 | 用户点击重试后 |
| 创建中 | BOT 创建请求中 | 用户提交创建表单 | 创建成功或失败 |
| 额度不足 | BOT 席位已满 | bot_seats_available = 0 | 用户关闭提示后 |

**状态流转图**：

```
[加载中] --(数据加载成功)--> [正常]
[加载中] --(数据加载失败)--> [错误状态]
[加载中] --(bots列表为空)--> [空状态]
[正常] --(点击创建新 BOT)--> [创建中]
[创建中] --(创建成功)--> [正常]
[空状态] --(创建成功)--> [正常]
[错误状态] --(点击重试)--> [加载中]
[正常] --(额度不足)--> [额度不足提示] --(关闭)--> [正常]
```

---

## 业务处理逻辑

### 场景一：查看全局资源看板

**触发条件**：管理员进入工作台页面

**执行逻辑**：

1. 系统接收请求：页面加载时调用 `GET /api/v1/tenant/workspace` 接口
2. 系统执行处理：
   - 展示全局 MoliAI点数余额（全账号共享资金池）
   - 展示 BOT 席位使用情况（已创建 / 总额度）
   - 展示 BOT 实例列表，每个卡片显示：名称、状态、累计线索数、MoliAI点数消耗
3. 系统返回响应：渲染完整工作台 dashboard

**边界条件**：

| 条件 | 系统行为 |
|------|---------|
| 无可授权站点 | 显示空态引导文案 |
| 未上线站点 | 可选但显示警告提示 |
| 数据加载超时 | 展示错误状态，提供重试按钮 |

**状态变更**：

| 原状态 | 新状态 | 触发条件 |
|--------|--------|----------|
| 加载中 | 正常 | 数据加载成功 |
| 加载中 | 空状态 | bots 列表为空 |
| 加载中 | 错误状态 | 接口返回错误 |

**输出**：完整工作台 dashboard

---

### 场景二：创建新 BOT 实例

**触发条件**：管理员点击 [+ 创建新 BOT] 占位卡片

**执行逻辑**：

1. 系统接收请求：前端检测 BOT 席位是否充足（bot_seats_available > 0）
2. 系统执行处理：
   - 若额度充足，弹出创建表单，输入 BOT 名称
   - 提交后调用 `POST /api/v1/bot/create` 接口，返回 bot_id
   - 创建成功后关闭弹窗，刷新工作台列表
3. 系统返回响应：新 BOT 卡片显示在列表中

**边界条件**：

| 条件 | 系统行为 |
|------|---------|
| bot_seats_available = 0 | 创建卡片置灰禁用，Toast「BOT 席位已用完，请联系销售扩充」 |
| bot_name 为空 | 表单校验失败，提示「BOT 名称不能为空」 |
| bot_name 长度 < 2 或 > 50 | 表单校验失败，提示「名称长度需在 2-50 字符之间」 |
| 网络超时 | Toast「网络连接异常，请检查网络后重试」 |

**状态变更**：

| 原状态 | 新状态 | 触发条件 |
|--------|--------|----------|
| 正常 | 创建中 | 用户提交创建表单 |
| 创建中 | 正常 | 创建成功 |
| 创建中 | 正常 | 创建失败，保持原状态 |

**输出**：新 BOT 创建成功，显示在工作台列表中

---

### 场景三：进入 BOT 工作空间

**触发条件**：管理员点击 BOT 卡片

**执行逻辑**：

1. 系统接收请求：用户点击 BOT 卡片
2. 系统执行处理：
   - 前端将 current_active_bot_id 设置为选中的 bot_id
   - 将 bot_id 写入 localStorage，键名 `current_active_bot_id`
   - 判断该 BOT 的 `icp_status` 字段：
     - 若 `icp_status` = pending：跳转至业务初始化页面
     - 若 `icp_status` = completed：跳转至搜客需求输入页面
   - 此后该用户所有操作被严格锁定在该 BOT 的数据作用域内
3. 系统返回响应：根据业务画像状态进入对应页面

**边界条件**：

| 条件 | 系统行为 |
|------|---------|
| localStorage 写入失败 | 尝试再次写入，如仍失败则提示用户 |
| icp_status 为其他值 | 默认跳转至业务初始化页面 |

**状态变更**：无状态变更，仅切换上下文

**输出**：根据业务画像状态进入对应页面

---

### 场景四：BOT 状态自动同步

**触发条件**：系统每 24 小时自动检测一次动态数据探针状态

**执行逻辑**：

1. 系统接收请求：服务端定时任务每 24 小时执行一次探针健康检测
2. 系统执行处理：
   - 检测逻辑：检查该 BOT 对应的动态数据探针最近 24 小时内是否有数据上报
   - 有数据上报：状态更新为 `running`
   - 无数据上报：状态更新为 `failed`
   - 从未插入探针脚本：状态保持 `undeployed`
   - 无需人工干预，状态自动同步
3. 系统返回响应：BOT 卡片状态标签实时反映探针健康度

**边界条件**：

| 条件 | 系统行为 |
|------|---------|
| 探针完全断线超过 24 小时 | 状态标记为 `failed` |
| 新创建 BOT 尚未插入脚本 | 状态为 `undeployed` |

**状态变更**：

| 原状态 | 新状态 | 触发条件 |
|--------|--------|----------|
| running | failed | 24 小时内无数据上报 |
| failed | running | 恢复数据上报 |
| undeployed | running | 插入探针并上报数据 |

**输出**：BOT 卡片状态标签实时反映探针健康度

---

### 场景五：购买更多算力

**触发条件**：管理员点击"购买更多算力"按钮

**执行逻辑**：

1. 系统接收请求：用户点击"购买更多算力"按钮
2. 系统执行处理：
   - 弹出【购买更多算力】模态框
   - 提示"请联系销售或客服人员"，显示官网联系方式
   - 不直接跳转支付，引导线下联系
3. 系统返回响应：展示联系引导模态框

**边界条件**：

| 条件 | 系统行为 |
|------|---------|
| 模态框已打开 | 不重复打开 |
| 用户点击关闭 | 关闭模态框 |

**状态变更**：无

**输出**：展示联系引导模态框

---

## 技术处理逻辑

### 数据加工规则

| 前端字段 | 加工类型 | 技术处理逻辑 | 存储位置 |
|---------|---------|--------------|---------|
| Global MoliAI点数余额 | 查询 | 从 `tenant_configs` 表 `moli_ai_balance` 字段查询 | `tenant_configs.moli_ai_balance` |
| BOT 席位（已用） | 聚合计算 | 从 `bots` 表统计 `tenant_id` 对应的记录数，计算 `COUNT(*)` | 实时计算 |
| BOT 席位（总计） | 查询 | 从 `tenant_configs` 表 `bot_seats_total` 字段查询 | `tenant_configs.bot_seats_total` |
| 可用 BOT 席位 | 计算 | `bot_seats_total - bot_seats_used` | 实时计算 |
| BOT ID | 系统生成 | 格式 `BOT-{timestamp}-{random(4位)}`，timestamp 为毫秒时间戳 | `bots.bot_id` |
| BOT 状态 | 条件判断 | 查询 `probe_logs` 表最近 24 小时是否有上报记录 | `bots.status` |
| 静态线索数 | 聚合计算 | 从 `leads_static` 表实时统计 `COUNT(*)`，按 `bot_id` 分组 | 实时计算 |
| 动态线索数 | 聚合计算 | 从 `leads_dynamic` 表实时统计 `COUNT(*)`，按 `bot_id` 分组 | 实时计算 |
| MoliAI点数消耗 | 聚合计算 | 从 `bot_moli_ai_logs` 表统计该 BOT 累计消耗，计算 `SUM(amount)` | 实时计算 |

### 计算逻辑

**BOT 状态检测逻辑**：

**计算公式**：
```
IF 存在探针记录 AND 最近24小时有上报:
    status = "running"
ELSE IF 存在探针记录 AND 最近24小时无上报:
    status = "failed"
ELSE:
    status = "undeployed"
```

**触发时机**：服务端定时任务每 24 小时执行一次

**存储方式**：更新 `bots.status` 字段

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
  "message": "操作成功",
  "data": {
    "moli_ai_balance": 35000,
    "bot_seats_used": 1,
    "bot_seats_total": 3,
    "bot_seats_available": 2,
    "bots": [
      {
        "bot_id": "BOT-001",
        "bot_name": "北美区-户外屏主站",
        "status": "running",
        "icp_status": "completed",
        "static_leads_count": 48,
        "dynamic_leads_count": 12,
        "moli_ai_consumed": 850,
        "created_at": "2024-01-10T09:00:00Z"
      }
    ]
  }
}
```

**响应码说明**：

| code | 含义 |
|------|------|
| 200 | 成功 |
| 401 | 未登录 |
| 403 | 无权限 |
| 500 | 服务异常 |

---

### API 二：创建 BOT

```
POST /api/v1/bot/create
```

**请求头**：`Authorization: Bearer {tenant_token}`

**Content-Type**：`application/json`

**请求参数**：

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| bot_name | `string` | 是 | BOT 名称，长度 2-50 字符 |

**响应结构**：

```json
{
  "code": 200,
  "message": "操作成功",
  "data": {
    "bot_id": "BOT-002",
    "bot_name": "欧洲区-LED显示屏",
    "status": "undeployed",
    "icp_status": "pending"
  }
}
```

**响应码说明**：

| code | 含义 |
|------|------|
| 200 | 成功 |
| 400 | 参数错误 |
| 401 | 未登录 |
| 403 | 无额度 |
| 500 | 创建失败 |

---

## 异常兜底

| 异常场景 | 检测方式 | 后端处理 | 前端表现 |
|---------|---------|---------|---------|
| BOT 创建失败 | code 非 200 | 返回对应错误码 | 失败提示，Toast「BOT 创建失败，请稍后重试」 |
| 无 BOT 额度 | bot_seats_available = 0 | 返回 403 | 创建卡片禁用，Toast「BOT 席位已用完，请联系销售扩充」 |
| 网络超时 | 请求超时 | 返回 504 | Toast「网络连接异常，请检查网络后重试」 |
| 服务不可用 | code 500 | 返回 500 | 全局错误处理，Toast「服务暂时不可用，请稍后再试」 |
| 未登录 | code 401 | 返回 401 | 跳转登录页面，Toast「请先登录」 |
| 数据加载失败 | code 非 200 | 返回错误码 | 展示错误状态页面，提供重试按钮 |
