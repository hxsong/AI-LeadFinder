# Apollo.io API 规格文档

## 概述

Apollo.io 是一个销售智能和互动平台，拥有超过 2.1 亿联系人和 3500 万公司的数据库。通过 Apollo API 可以获取联系人信息、企业信息以及进行数据增强。

**基础 URL**: `https://api.apollo.io`

**认证方式**: API Key（通过 Header 传递）

---

## 核心接口

### 1. People Enrichment（联系人数据增强）

根据已知信息（姓名、邮箱、域名等）获取联系人详细信息。

**接口地址**: `POST /api/v1/people/match`

**请求头**:
```
Content-Type: application/json
Api-Key: YOUR_API_KEY
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| first_name | string | 否 | 名字，通常与 last_name 配合使用 |
| last_name | string | 否 | 姓氏，通常与 first_name 配合使用 |
| name | string | 否 | 全名，使用此参数则无需 first_name 和 last_name |
| email | string | 否 | 邮箱地址 |
| hashed_email | string | 否 | 哈希邮箱（MD5 或 SHA-256 格式） |
| organization_name | string | 否 | 公司名称 |
| domain | string | 否 | 公司域名（不含 www. 或 @ 符号） |
| id | string | 否 | Apollo 数据库中的联系人唯一 ID |
| linkedin_url | string | 否 | LinkedIn 个人主页 URL |
| reveal_personal_emails | boolean | 否 | 是否返回个人邮箱（默认 false） |
| reveal_phone_number | boolean | 否 | 是否返回电话号码（默认 false） |
| run_waterfall_email | boolean | 否 | 是否启用邮箱瀑布式增强 |
| run_waterfall_phone | boolean | 否 | 是否启用电话瀑布式增强 |
| webhook_url | string | 条件必填 | 当 reveal_phone_number=true 时必填 |

**请求示例**:
```json
{
  "first_name": "John",
  "last_name": "Doe",
  "domain": "example.com",
  "reveal_personal_emails": true,
  "reveal_phone_number": true,
  "webhook_url": "https://your-webhook.com/phone"
}
```

**响应示例**:
```json
{
  "person": {
    "id": "587cf802f65125cad923a266",
    "first_name": "John",
    "last_name": "Doe",
    "name": "John Doe",
    "title": "VP of Sales",
    "organization": {
      "id": "5f5a8f7e4b3b2c0001a8b7c6",
      "name": "Example Corp",
      "domain": "example.com",
      "industry": "Technology",
      "employee_count": "50-200",
      "location": {
        "city": "San Francisco",
        "state": "California",
        "country": "United States"
      }
    },
    "email": "john.doe@example.com",
    "phone_numbers": [
      {
        "raw_number": "+1-555-123-4567",
        "sanitized_number": "+15551234567",
        "type": "mobile"
      }
    ],
    "linkedin_url": "https://linkedin.com/in/johndoe"
  }
}
```

---

### 2. Bulk People Enrichment（批量联系人数据增强）

一次请求增强多个联系人（最多 10 个）。

**接口地址**: `POST /api/v1/people/bulk_match`

**请求头**:
```
Content-Type: application/json
Api-Key: YOUR_API_KEY
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| details | array | 是 | 联系人信息数组，每个元素包含联系人识别信息 |
| reveal_personal_emails | boolean | 否 | 是否返回个人邮箱（默认 false） |
| reveal_phone_number | boolean | 否 | 是否返回电话号码（默认 false） |
| run_waterfall_email | boolean | 否 | 是否启用邮箱瀑布式增强 |
| run_waterfall_phone | boolean | 否 | 是否启用电话瀑布式增强 |
| webhook_url | string | 条件必填 | 当 reveal_phone_number=true 时必填 |

**请求示例**:
```json
{
  "details": [
    {
      "first_name": "John",
      "last_name": "Doe",
      "domain": "example.com"
    },
    {
      "email": "jane@example.com"
    }
  ],
  "reveal_personal_emails": true,
  "reveal_phone_number": true,
  "webhook_url": "https://your-webhook.com/phone"
}
```

---

### 3. Organization Enrichment（企业数据增强）

根据域名获取企业详细信息。

**接口地址**: `GET /api/v1/organizations/enrich`

**请求头**:
```
Api-Key: YOUR_API_KEY
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| domain | string | 是 | 企业域名（不含 www. 或 @ 符号） |

**请求示例**:
```
GET /api/v1/organizations/enrich?domain=apollo.io
```

**响应示例**:
```json
{
  "organization": {
    "id": "5f5a8f7e4b3b2c0001a8b7c6",
    "name": "Apollo.io",
    "domain": "apollo.io",
    "industry": "Computer Software",
    "subindustry": "Sales Intelligence",
    "employee_count": "500-1000",
    "founded_year": 2015,
    "annual_revenue": "$50M-$100M",
    "location": {
      "city": "San Francisco",
      "state": "California",
      "country": "United States",
      "postal_code": "94105",
      "street": "535 Mission St"
    },
    "linkedin_url": "https://linkedin.com/company/apollo-io",
    "twitter_url": "https://twitter.com/apollo_io",
    "website_url": "https://apollo.io",
    "technologies": ["Salesforce", "HubSpot", "Marketo"],
    "keywords": ["sales intelligence", "lead generation", "B2B data"]
  }
}
```

---

### 4. People Search（联系人搜索）

根据条件搜索联系人。

**接口地址**: `POST /api/v1/mixed_people/search`

**请求头**:
```
Content-Type: application/json
Api-Key: YOUR_API_KEY
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| person_titles | array | 否 | 职位名称列表 |
| person_locations | array | 否 | 地区列表 |
| person_seniorities | array | 否 | 职级列表 |
| organization_domains | array | 否 | 企业域名列表 |
| organization_industries | array | 否 | 行业列表 |
| organization_employee_counts | array | 否 | 企业规模列表 |
| q_organization_keyword_tags | array | 否 | 企业关键词标签 |
| page | integer | 否 | 页码（默认 1） |
| per_page | integer | 否 | 每页数量（默认 25，最大 100） |

**请求示例**:
```json
{
  "person_titles": ["VP of Sales", "Sales Director"],
  "person_locations": ["California", "Texas"],
  "organization_industries": ["Technology", "Software"],
  "organization_employee_counts": ["50-200", "200-500"],
  "page": 1,
  "per_page": 25
}
```

**响应示例**:
```json
{
  "people": [
    {
      "id": "587cf802f65125cad923a266",
      "first_name": "John",
      "last_name": "Doe",
      "name": "John Doe",
      "title": "VP of Sales",
      "organization": {
        "id": "5f5a8f7e4b3b2c0001a8b7c6",
        "name": "Example Corp",
        "domain": "example.com"
      },
      "email": "john.doe@example.com",
      "linkedin_url": "https://linkedin.com/in/johndoe"
    }
  ],
  "pagination": {
    "page": 1,
    "per_page": 25,
    "total_entries": 150,
    "total_pages": 6
  }
}
```

---

## 速率限制

- **People Enrichment**: 根据套餐不同，每分钟 50-500 次请求
- **Bulk People Enrichment**: 限制为 People Enrichment 的 50%
- **Organization Enrichment**: 每分钟 100-1000 次请求
- **People Search**: 每分钟 20-200 次请求

---

## Credits 消耗

- **基础数据增强**: 不消耗 Credits
- **邮箱揭示**: 每个有效邮箱消耗 1 Credit
- **电话号码揭示**: 每个有效电话号码消耗 1 Credit
- **瀑布式增强**: 根据数据源不同消耗 1-3 Credits

---

## Webhook 配置

当使用 `reveal_phone_number` 或瀑布式增强时，需要配置 Webhook 接收异步结果。

**Webhook 要求**:
- 必须支持 HTTPS
- 必须能够处理 Apollo 的请求量
- 必须支持幂等性处理（Apollo 可能重试请求）

**Webhook 响应格式**:
```json
{
  "person_id": "587cf802f65125cad923a266",
  "phone_numbers": [
    {
      "raw_number": "+1-555-123-4567",
      "sanitized_number": "+15551234567",
      "type": "mobile",
      "source": "waterfall"
    }
  ],
  "status": "completed"
}
```

---

## 错误码

| 状态码 | 说明 |
|--------|------|
| 200 | 成功 |
| 400 | 请求参数错误 |
| 401 | API Key 无效或缺失 |
| 402 | Credits 不足 |
| 403 | 无权限访问 |
| 404 | 资源不存在 |
| 429 | 请求频率超限 |
| 500 | 服务器内部错误 |

---

## 应用场景

### 静态线索池场景

1. **企业入库时**: 使用 Organization Enrichment 获取企业详细信息
2. **联系人挖掘**: 使用 People Search 根据企业域名搜索相关联系人
3. **联系人增强**: 使用 People Enrichment 获取联系人的邮箱和电话

### 动态线索池场景

1. **IP 解析企业后**: 使用 Organization Enrichment 验证企业信息
2. **决策人挖掘**: 使用 People Search 搜索目标企业的关键决策人
3. **联系方式获取**: 使用 People Enrichment 揭示邮箱和电话号码

---

## 参考链接

- [Apollo API 文档](https://docs.apollo.io/docs/api-overview)
- [Apollo API Reference](https://docs.apollo.io/reference/people-enrichment)
- [Apollo Pricing](https://www.apollo.io/pricing)
