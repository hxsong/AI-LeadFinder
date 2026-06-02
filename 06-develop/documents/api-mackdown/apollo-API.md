# Apollo.io API

## 概述

通过公司名称或者域名查询企业联系人。

**基础 URL**: `https://api.apollo.io`

**认证方式**: API Key（通过 Header 传递）

```
Api-Key: YOUR_API_KEY
```

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

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| person | object | 联系人信息 |
| person.id | string | Apollo 联系人唯一 ID |
| person.first_name | string | 名字 |
| person.last_name | string | 姓氏 |
| person.name | string | 全名 |
| person.email | string | 工作邮箱 |
| person.email_status | string | 邮箱状态：verified/unverified |
| person.email_source | string | 邮箱来源 |
| person.work_email | string | 工作邮箱 |
| person.personal_emails | array | 个人邮箱列表 |
| person.phone_numbers | array | 电话号码列表 |
| person.phone_numbers[].raw_number | string | 原始号码 |
| person.phone_numbers[].sanitized_number | string | 格式化号码 |
| person.phone_numbers[].type | string | 类型：mobile/landline |
| person.title | string | 职位 |
| person.seniority | string | 职级：entry/mid/senior/executive |
| person.department | string | 部门 |
| person.headline | string | LinkedIn 标题 |
| person.linkedin_url | string | LinkedIn 个人主页 |
| person.twitter_url | string | Twitter 链接 |
| person.github_url | string | GitHub 链接 |
| person.facebook_url | string | Facebook 链接 |
| person.photo_url | string | 头像 URL |
| person.organization | object | 公司信息 |
| person.organization.id | string | 公司 ID |
| person.organization.name | string | 公司名称 |
| person.organization.domain | string | 公司域名 |
| person.organization.industry | string | 行业 |
| person.organization.subindustry | string | 子行业 |
| person.organization.employee_count | string | 员工规模 |
| person.organization.annual_revenue | string | 年收入 |
| person.organization.founded_year | int | 成立年份 |
| person.organization.location | object | 公司地址 |
| person.organization.location.city | string | 城市 |
| person.organization.location.state | string | 州/省 |
| person.organization.location.country | string | 国家 |
| person.organization.location.postal_code | string | 邮编 |
| person.organization.location.street | string | 街道 |
| person.organization.linkedin_url | string | LinkedIn 公司主页 |
| person.organization.twitter_url | string | Twitter 公司主页 |
| person.organization.website_url | string | 公司网站 |

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
    "seniority": "executive",
    "department": "Sales",
    "email": "john.doe@example.com",
    "email_status": "verified",
    "work_email": "john.doe@example.com",
    "personal_emails": ["johndoe@gmail.com"],
    "phone_numbers": [
      {
        "raw_number": "+1-555-123-4567",
        "sanitized_number": "+15551234567",
        "type": "mobile"
      }
    ],
    "linkedin_url": "https://linkedin.com/in/johndoe",
    "photo_url": "https://example.com/photo.jpg",
    "organization": {
      "id": "5f5a8f7e4b3b2c0001a8b7c6",
      "name": "Example Corp",
      "domain": "example.com",
      "industry": "Technology",
      "subindustry": "Software",
      "employee_count": "50-200",
      "annual_revenue": "$10M-$50M",
      "founded_year": 2015,
      "location": {
        "city": "San Francisco",
        "state": "California",
        "country": "United States",
        "postal_code": "94105",
        "street": "535 Mission St"
      },
      "linkedin_url": "https://linkedin.com/company/example-corp",
      "website_url": "https://example.com"
    }
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

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| people | array | 联系人信息数组 |
| people[].person | object | 单个联系人信息（字段同 People Enrichment） |
| people[].status | string | 匹配状态：success/not_found/error |
| people[].error | object | 错误信息（如果有） |

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

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| organization | object | 企业信息 |
| organization.id | string | 企业唯一 ID |
| organization.name | string | 公司名称 |
| organization.domain | string | 公司域名 |
| organization.industry | string | 行业 |
| organization.subindustry | string | 子行业 |
| organization.employee_count | string | 员工规模 |
| organization.annual_revenue | string | 年收入 |
| organization.founded_year | int | 成立年份 |
| organization.description | string | 公司描述 |
| organization.logo_url | string | Logo URL |
| organization.location | object | 公司地址 |
| organization.location.city | string | 城市 |
| organization.location.state | string | 州/省 |
| organization.location.country | string | 国家 |
| organization.location.postal_code | string | 邮编 |
| organization.location.street | string | 街道 |
| organization.linkedin_url | string | LinkedIn 公司主页 |
| organization.twitter_url | string | Twitter 链接 |
| organization.facebook_url | string | Facebook 链接 |
| organization.website_url | string | 公司网站 |
| organization.technologies | array | 使用的技术栈 |
| organization.keywords | array | 公司关键词 |
| organization.phone | string | 公司电话 |
| organization.email | string | 公司邮箱 |
| organization.num_employees | int | 员工数量（精确值） |
| organization.total_funding | number | 总融资额 |
| organization.latest_funding_round | string | 最新融资轮次 |
| organization.latest_funding_date | string | 最新融资日期 |
| organization.funding_events | array | 融资事件列表 |

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
    "annual_revenue": "$50M-$100M",
    "founded_year": 2015,
    "description": "Apollo is a sales intelligence and engagement platform...",
    "logo_url": "https://logo.example.com/apollo.png",
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
    "technologies": ["Salesforce", "HubSpot", "Marketo", "Slack", "Zoom"],
    "keywords": ["sales intelligence", "lead generation", "B2B data", "sales engagement"],
    "phone": "+1-555-123-4567",
    "email": "info@apollo.io",
    "num_employees": 750,
    "total_funding": 100000000,
    "latest_funding_round": "Series C",
    "latest_funding_date": "2021-03-15"
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
| person_seniorities | array | 否 | 职级列表：entry/mid/senior/executive |
| organization_domains | array | 否 | 企业域名列表 |
| organization_industries | array | 否 | 行业列表 |
| organization_employee_counts | array | 否 | 企业规模列表 |
| q_organization_keyword_tags | array | 否 | 企业关键词标签 |
| contact_email_status | array | 否 | 邮箱状态：verified/unverified |
| page | integer | 否 | 页码（默认 1） |
| per_page | integer | 否 | 每页数量（默认 25，最大 100） |

**响应参数**:

| 参数名 | 类型 | 说明 |
|--------|------|------|
| people | array | 联系人列表 |
| people[].id | string | 联系人 ID |
| people[].first_name | string | 名字 |
| people[].last_name | string | 姓氏 |
| people[].name | string | 全名 |
| people[].title | string | 职位 |
| people[].seniority | string | 职级 |
| people[].department | string | 部门 |
| people[].email | string | 邮箱 |
| people[].email_status | string | 邮箱状态 |
| people[].phone | string | 电话 |
| people[].linkedin_url | string | LinkedIn 链接 |
| people[].organization | object | 公司信息 |
| people[].organization.id | string | 公司 ID |
| people[].organization.name | string | 公司名称 |
| people[].organization.domain | string | 公司域名 |
| people[].organization.industry | string | 行业 |
| people[].organization.employee_count | string | 员工规模 |
| people[].organization.location | object | 公司地址 |
| pagination | object | 分页信息 |
| pagination.page | int | 当前页码 |
| pagination.per_page | int | 每页数量 |
| pagination.total_entries | int | 总记录数 |
| pagination.total_pages | int | 总页数 |

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
      "seniority": "executive",
      "department": "Sales",
      "email": "john.doe@example.com",
      "email_status": "verified",
      "phone": "+1-555-123-4567",
      "linkedin_url": "https://linkedin.com/in/johndoe",
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
      }
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

| 接口 | 速率限制 |
|------|----------|
| People Enrichment | 每分钟 50-500 次请求（根据套餐） |
| Bulk People Enrichment | People Enrichment 限制的 50% |
| Organization Enrichment | 每分钟 100-1000 次请求 |
| People Search | 每分钟 20-200 次请求 |

---

## Credits 消耗

| 操作 | Credits 消耗 |
|------|--------------|
| 基础数据增强 | 不消耗 Credits |
| 邮箱揭示 | 每个有效邮箱 1 Credit |
| 电话号码揭示 | 每个有效电话 1 Credit |
| 瀑布式增强 | 1-3 Credits |

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
