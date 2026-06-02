# 出海派 - 海关数据 API

## 概述

通过海关数据搜索某个地区有进出口记录的企业信息。

**基础 URL**: `{{api.keep1}}`

**认证方式**: Bearer Token（通过 Header 传递）

```
Authorization: Bearer YOUR_TOKEN
```

---

## 核心接口

### 1. 海关数据列表

查询海关进出口数据记录。

**接口地址**: `POST /api/customs/customs_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| start_time | string | 否 | 起始时间（格式:xxxx-xx-xx） |
| end_time | string | 否 | 结束时间（格式:xxxx-xx-xx） |
| product | string | 否 | 产品名称 |
| hscode | string | 否 | 海关编码 |
| tradeCode | string | 否 | 提单号 |
| exporter_country | string | 否 | 出口国家（海关国家列表获取id） |
| importer_country | string | 否 | 进口国家（海关国家列表获取id） |
| buyer | string | 否 | 进口商 |
| seller | string | 否 | 出口商 |
| departure_port | string | 否 | 起运港 |
| buyer_port | string | 否 | 目的港 |
| limit | string | 否 | 每页数量:[10,20,50,100] |
| page | string | 否 | 页码 |
| recordType | string | 否 | 区分进出口数据:Inport=进口数据，Export=出口数据 |
| exclude_logistics | string | 否 | 排除物流字符，可多个，用","相连 |
| exclude_type | string | 否 | 排除物流类型:importer=进口商,exporter=出口商,both=两者,none=不排除 |

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | int | 状态码，1表示成功 |
| msg | string | 返回消息 |
| data | object | 数据对象 |
| data.list | array | 海关数据列表 |
| data.list[].snow_flake_id | string | 海关记录唯一ID |
| data.list[].date | string | 交易日期 |
| data.list[].product | string | 产品名称 |
| data.list[].hscode | string | 海关编码 |
| data.list[].tradeCode | string | 提单号 |
| data.list[].buyer | string | 进口商名称 |
| data.list[].seller | string | 出口商名称 |
| data.list[].exporter_country | string | 出口国家 |
| data.list[].importer_country | string | 进口国家 |
| data.list[].departure_port | string | 起运港 |
| data.list[].buyer_port | string | 目的港 |
| data.list[].quantity | string | 数量 |
| data.list[].weight | string | 重量 |
| data.list[].amount | string | 金额 |
| data.total | int | 总记录数 |
| data.page | int | 当前页码 |
| data.limit | int | 每页数量 |

---

### 3. 获取海关公司列表

获取海关进出口商公司列表。

**接口地址**: `POST /api/customs/get_company_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| type | string | 是 | 公司类型:[importer,exporter]，进口商OR出口商 |
| start_time | string | 否 | 起始时间（格式:xxxx-xx-xx） |
| end_time | string | 否 | 结束时间（格式:xxxx-xx-xx） |
| product | string | 否 | 产品名称 |
| hscode | string | 否 | 海关编码 |
| tradeCode | string | 否 | 提单号 |
| exporter_country | string | 否 | 出口国家（海关国家列表获取id） |
| importer_country | string | 否 | 进口国家（海关国家列表获取id） |
| buyer | string | 否 | 进口商 |
| seller | string | 否 | 出口商 |
| departure_port | string | 否 | 起运港 |
| buyer_port | string | 否 | 目的港 |
| limit | string | 否 | 每页数量:[10,20,50,100] |
| page | string | 否 | 页码 |
| tradeNumSort | string | 否 | 交易数量排序:1=是，其他任何值是不按数量排序 |
| exclude_logistics | string | 否 | 排除物流字符，可多个，用","相连 |
| exclude_type | string | 否 | 排除物流类型:importer=进口商,exporter=出口商,both=两者,none=不排除 |

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | int | 状态码，1表示成功 |
| msg | string | 返回消息 |
| data | object | 数据对象 |
| data.list | array | 公司列表 |
| data.list[].snow_flake_id | string | 公司唯一ID |
| data.list[].name | string | 公司名称 |
| data.list[].type | string | 类型：importer/exporter |
| data.list[].country | string | 国家 |
| data.list[].trade_num | int | 交易次数 |
| data.list[].trade_amount | string | 交易金额 |
| data.list[].first_trade_date | string | 首次交易日期 |
| data.list[].last_trade_date | string | 最后交易日期 |
| data.list[].status | string | 公司状态：新增/活跃/潜在 |
| data.total | int | 总记录数 |
| data.page | int | 当前页码 |
| data.limit | int | 每页数量 |

---

### 4. 获取海关公司详情

获取海关公司的详细信息。

**接口地址**: `POST /api/customs_company/get_company_detail`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| type | string | 是 | 类型（importer,exporter）进口商OR出口商 |
| customs_id | string | 是 | 海关记录id(snow_flake_id)，从某条海关记录进入时对应海关记录的id |
| customs_date | string | 是 | 海关记录日期(date)，从某条海关记录进入时对应海关记录的日期 |
| company_id | string | 是 | 海关公司id(snow_flake_id) |

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | int | 状态码，1表示成功 |
| msg | string | 返回消息 |
| data | object | 公司详情 |
| data.snow_flake_id | string | 公司唯一ID |
| data.name | string | 公司名称 |
| data.type | string | 类型：importer/exporter |
| data.country | string | 国家 |
| data.address | string | 地址 |
| data.contact | string | 联系方式 |
| data.email | string | 邮箱 |
| data.phone | string | 电话 |
| data.website | string | 网站 |
| data.trade_num | int | 交易次数 |
| data.trade_amount | string | 交易金额 |
| data.first_trade_date | string | 首次交易日期 |
| data.last_trade_date | string | 最后交易日期 |
| data.status | string | 公司状态 |
| data.description | string | 公司描述 |
| data.industry | string | 行业 |
| data.main_products | array | 主营产品 |

---

### 5. 智能搜邮（AI挖掘联系方式）

通过AI挖掘获取公司的联系方式（邮箱、电话、社交媒体等）。

**接口地址**: `POST /api/customs_company/ai_search_info`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| company_name | string | 是 | 海关公司名称 |
| company_id | string | 是 | 海关公司ID（snow_flake_id） |
| onceAgain | string | 否 | 再一次搜索，布尔值（true,false） |
| precise_status | string | 否 | 精准:[0,1] |

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | int | 状态码，1表示成功 |
| msg | string | 返回消息 |
| data | object | 联系方式数据 |
| data.emails | array | 邮箱列表 |
| data.emails[].email | string | 邮箱地址 |
| data.emails[].type | string | 邮箱类型：work/personal |
| data.emails[].source | string | 来源 |
| data.phones | array | 电话列表 |
| data.phones[].phone | string | 电话号码 |
| data.phones[].type | string | 电话类型：mobile/landline |
| data.phones[].source | string | 来源 |
| data.social_media | array | 社交媒体列表 |
| data.social_media[].platform | string | 平台：linkedin/facebook/twitter |
| data.social_media[].url | string | 链接地址 |
| data.website | string | 公司官网 |

---

## 通用响应格式

```json
{
    "code": 1,
    "msg": "返回成功",
    "time": "1734940320",
    "data": {
        "list": [],
        "total": 0
    }
}
```

**响应状态码说明**:

| 状态码 | 说明 |
|--------|------|
| code=1 | 成功 |
| code=0 或其他 | 失败，查看msg字段 |

---

## 错误码

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | Token无效或缺失 |
| 403 | 无权限访问 |
| 404 | 资源不存在 |
| 429 | 请求频率超限 |
| 500 | 服务器内部错误 |
