# Google Maps Places API - Text Search

## 概述

通过地图和企业特征等搜索获取相关企业信息。

---

## 请求格式

```
POST https://places.googleapis.com/v1/places:searchText
```

---

## 必需参数

### textQuery
- 类型：string
- 说明：要搜索的文本字符串，例如"北京烤鸭"或"南京附近的鞋店"
- 示例：`"AV Integrators in California"`

### FieldMask
- 类型：string (HTTP Header)
- 说明：指定响应中要返回的字段
- 示例：`X-Goog-FieldMask: places.displayName,places.formattedAddress,places.location`

---

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

---

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

---

## 响应参数

| 参数名 | 类型 | 说明 |
|--------|------|------|
| places | array | 地点列表 |
| places[].name | string | 地点资源名称，格式：places/{place_id} |
| places[].id | string | 地点唯一ID |
| places[].displayName | object | 地点显示名称 |
| places[].displayName.text | string | 名称文本 |
| places[].displayName.languageCode | string | 语言代码 |
| places[].formattedAddress | string | 格式化地址 |
| places[].location | object | 地理位置坐标 |
| places[].location.latitude | number | 纬度 |
| places[].location.longitude | number | 经度 |
| places[].types | array | 地点类型列表 |
| places[].internationalPhoneNumber | string | 国际电话号码 |
| places[].nationalPhoneNumber | string | 国内电话号码 |
| places[].websiteUri | string | 网站URL |
| places[].googleMapsUri | string | Google Maps链接 |
| places[].businessStatus | string | 营业状态：OPERATIONAL/CLOSED_TEMPORARILY/CLOSED_PERMANENTLY |
| places[].rating | number | 评分（1-5） |
| places[].userRatingCount | int | 用户评分数量 |
| places[].priceLevel | string | 价格等级：FREE/INEXPENSIVE/MODERATE/EXPENSIVE/VERY_EXPENSIVE |
| places[].openingHours | object | 营业时间信息 |
| places[].openingHours.openNow | boolean | 当前是否营业 |
| places[].openingHours.periods | array | 营业时间段 |
| places[].photos | array | 地点照片列表 |
| places[].photos[].name | string | 照片资源名称 |
| places[].photos[].widthPx | int | 照片宽度 |
| places[].photos[].heightPx | int | 照片高度 |
| nextPageToken | string | 下一页令牌 |

---

## 响应示例

```json
{
  "places": [
    {
      "name": "places/ChIJrTLRLZxYwokR1w3R0qR8F5E",
      "id": "ChIJrTLRLZxYwokR1w3R0qR8F5E",
      "displayName": {
        "text": "ABC Audio Video Integration",
        "languageCode": "en"
      },
      "formattedAddress": "123 Main St, Los Angeles, CA 90001, USA",
      "location": {
        "latitude": 34.0522,
        "longitude": -118.2437
      },
      "types": ["electronics_store", "establishment", "point_of_interest"],
      "internationalPhoneNumber": "+1 555-123-4567",
      "nationalPhoneNumber": "(555) 123-4567",
      "websiteUri": "https://www.abc-audio-video.com",
      "googleMapsUri": "https://maps.google.com/?cid=1234567890",
      "businessStatus": "OPERATIONAL",
      "rating": 4.5,
      "userRatingCount": 128,
      "priceLevel": "MODERATE"
    }
  ],
  "nextPageToken": "Aa..."
}
```

---

## 关键词提取映射

| 用户意图 | API 参数 |
|----------|----------|
| 地区/城市 | `textQuery` 中包含地理位置，或使用 `locationBias`/`locationRestriction` |
| 行业/企业类型 | `textQuery` 中包含行业关键词，配合 `includedType` |
| 数量限制 | `pageSize` (最大 20/次，需分页获取更多) |

---

## 使用限制

- 单次请求最多返回 20 条结果
- 需要分页获取更多结果
- 需要 Google Cloud API Key
- 有配额限制，需关注使用量
