# Google Maps Places API - Text Search (New)

## 简介

文本搜索（新）可以根据一个字符串（例如，"北京烤鸭""南京附近的鞋店"或"长安街 8 号"）返回一组地点的相关信息。该服务会返回一个与文本字符串和任何位置偏向设置相匹配的地点列表。

## 请求格式

```
POST https://places.googleapis.com/v1/places:searchText
```

## 必需参数

### textQuery
- 类型：string
- 说明：要搜索的文本字符串，例如"北京烤鸭"或"南京附近的鞋店"
- 示例：`"AV Integrators in California"`

### FieldMask
- 类型：string (HTTP Header)
- 说明：指定响应中要返回的字段
- 示例：`X-Goog-FieldMask: places.displayName,places.formattedAddress,places.location`

## 可选参数

### includedType
- 类型：string
- 说明：将结果限制为与指定类型匹配的地点
- 常用类型：
  - `electronics_store` - 电子产品商店
  - `store` - 商店
  - `establishment` - 机构
  - `point_of_interest` - 兴趣点

### locationBias
- 类型：object
- 说明：指定要搜索的区域，作为偏向结果的位置
- 示例：
```json
{
  "circle": {
    "center": {
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "radius": 50000
  }
}
```

### locationRestriction
- 类型：object
- 说明：指定要搜索的区域，结果必须在此区域内
- 示例：
```json
{
  "rectangle": {
    "low": {
      "latitude": 32.0,
      "longitude": -124.0
    },
    "high": {
      "latitude": 42.0,
      "longitude": -114.0
    }
  }
}
```

### maxResultCount (已弃用)
- 类型：integer
- 说明：要返回的结果数量上限（已弃用，建议使用 pageSize）

### pageSize
- 类型：integer
- 说明：每页返回的结果数量，最大 20 条
- 默认值：20

### pageToken
- 类型：string
- 说明：用于获取下一页结果的令牌

### rankPreference
- 类型：string
- 说明：结果的排序方式
- 可选值：
  - `RELEVANCE` - 按相关性排序（默认）
  - `DISTANCE` - 按距离排序

### regionCode
- 类型：string
- 说明：指定区域代码，影响结果格式
- 示例：`"US"`, `"CN"`, `"DE"`

### languageCode
- 类型：string
- 说明：返回结果的语言
- 示例：`"zh-CN"`, `"en"`

## 请求示例

```json
POST https://places.googleapis.com/v1/places:searchText
Headers:
  X-Goog-FieldMask: places.displayName,places.formattedAddress,places.location,places.types
  X-Goog-Api-Key: YOUR_API_KEY

Body:
{
  "textQuery": "AV Integrators in California",
  "includedType": "electronics_store",
  "pageSize": 20,
  "languageCode": "en"
}
```

## 响应示例

```json
{
  "places": [
    {
      "displayName": {
        "text": "ABC Audio Video Integration",
        "languageCode": "en"
      },
      "formattedAddress": "123 Main St, Los Angeles, CA 90001, USA",
      "location": {
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "types": ["electronics_store", "establishment", "point_of_interest"]
    }
  ],
  "nextPageToken": "Aa..."
}
```

## 关键词提取映射

| 用户意图 | API 参数 |
|----------|----------|
| 地区/城市 | `textQuery` 中包含地理位置，或使用 `locationBias`/`locationRestriction` |
| 行业/企业类型 | `textQuery` 中包含行业关键词，配合 `includedType` |
| 数量限制 | `pageSize` (最大 20/次，需分页获取更多) |

## 使用限制

- 单次请求最多返回 20 条结果
- 需要分页获取更多结果
- 需要 Google Cloud API Key
- 有配额限制，需关注使用量
