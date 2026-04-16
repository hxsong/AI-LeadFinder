# Jina Reader API

## 简介

Jina Reader 是一个网页内容解析 API，可以将任意网页转换为纯净的文本内容，用于后续的语义分析和信息提取。

## 请求格式

```
GET https://r.jina.ai/{url}
```

或

```
GET https://r.jina.ai/http://{url}
```

## 基本用法

### 简单请求
```bash
curl "https://r.jina.ai/https://example.com"
```

### 带参数请求
```bash
curl -H "X-Set-Timeout: 30" "https://r.jina.ai/https://example.com"
```

## 请求参数

### url (路径参数)
- 类型：string
- 说明：要解析的网页 URL
- 示例：`https://example.com`

### X-Set-Timeout (Header)
- 类型：integer
- 说明：请求超时时间（秒）
- 默认值：10

### X-With-Generated-Summary (Header)
- 类型：boolean
- 说明：是否生成摘要
- 默认值：false

### X-With-Images-Alt (Header)
- 类型：boolean
- 说明：是否包含图片 alt 文本
- 默认值：false

## 响应格式

### 成功响应
```
Title: Example Domain
URL: https://example.com

This domain is for use in illustrative examples in documents...
```

### Markdown 格式
API 返回的是 Markdown 格式的文本内容，包含：
- 标题
- 正文内容
- 链接（可选）
- 图片 alt 文本（可选）

## 批量处理

Jina Reader API 是单次请求，如需批量处理多个 URL，需要循环调用：

```python
import requests

urls = ["https://example1.com", "https://example2.com", "https://example3.com"]

for url in urls:
    response = requests.get(f"https://r.jina.ai/{url}")
    content = response.text
    # 处理内容...
```

## 使用场景

### 1. 企业官网内容提取
```
GET https://r.jina.ai/https://company-website.com
```
提取企业介绍、产品信息、联系方式等

### 2. 产品页面解析
```
GET https://r.jina.ai/https://company-website.com/products
```
提取产品描述、规格参数等

### 3. 关于我们页面
```
GET https://r.jina.ai/https://company-website.com/about
```
提取公司背景、团队信息等

## 关键词提取映射

| 用户意图 | API 参数 |
|----------|----------|
| 企业官网 | `url` = 企业域名 |
| 产品信息 | `url` = 产品页面 URL |
| 公司介绍 | `url` = 关于我们页面 |

## 响应示例

```
Title: ABC Outdoor Gear - Premium Hiking Equipment
URL: https://www.abc-outdoor.com

About Us
ABC Outdoor Gear is a leading distributor of premium hiking and outdoor equipment...

Our Products
- Hiking Boots
- Camping Tents
- Backpacks
- Climbing Gear

Contact
Email: info@abc-outdoor.com
Phone: +1-555-123-4567
Address: 123 Mountain Road, Denver, CO 80202
```

## 使用限制

- 单次请求对应一个 URL
- 有请求频率限制
- 免费版有配额限制
- 超时时间可配置（最长 30 秒）

## 费用计算

- 单次调用 = 1 Credit
- 批量处理 N 个域名 = N 次调用 = N Credits
