# 出海派API接口站 规格文档

## 概述

出海派是一个跨境贸易数据平台，提供海关数据、企业信息、采购商/供应商搜索等功能。通过出海派 API 可以获取海关进出口记录、企业详情、联系方式等数据。

**基础 URL**: `{{api.keep1}}`

**认证方式**: Bearer Token（通过 Header 传递）

```
Authorization: Bearer YOUR_TOKEN
```

---

## 核心接口

### 1. 海关数据

#### 1.1 获取海关国家列表

获取支持的海关数据国家列表。

**接口地址**: `GET /api/customs/get_customs_country_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
```

---

#### 1.2 海关数据列表

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

---

#### 1.3 获取海关公司状态

批量获取海关公司状态（新增/活跃/潜在）。

**接口地址**: `POST /api/customs/get_customs_company_status`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| company_ids_data | string | 是 | 海关公司id和类型，json格式：[{"id":"******","type":"export"},...]，type可选值：import, export |

---

#### 1.4 获取海关公司列表

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

---

#### 1.5 获取海关采购趋势

获取海关采购趋势分析数据。

**接口地址**: `POST /api/customs/market`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| type | string | 否 | 公司类型:[importer,exporter]，进口商OR出口商 |
| start_time | string | 否 | 起始时间（格式:xxxx-xx-xx） |
| end_time | string | 否 | 结束时间（格式:xxxx-xx-xx） |
| product | string | 否 | 产品名称 |
| hscode | string | 否 | 海关编码 |
| exporter_country | string | 否 | 出口国家（海关国家列表获取id） |
| importer_country | string | 否 | 进口国家（海关国家列表获取id） |
| limit | string | 否 | 每页数量:[10,20,50,100] |
| page | string | 否 | 页码 |
| tradeNumSort | string | 否 | 交易数量排序:1=是，其他任何值是不按数量排序 |

---

#### 1.6 获取海关全球区域分布图

获取海关全球贸易区域分布数据。

**接口地址**: `POST /api/customs/country`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| type | string | 否 | 公司类型:[importer,exporter]，进口商OR出口商 |
| start_time | string | 否 | 起始时间（格式:xxxx-xx-xx） |
| end_time | string | 否 | 结束时间（格式:xxxx-xx-xx） |
| product | string | 否 | 产品名称 |
| hscode | string | 否 | 海关编码 |
| exporter_country | string | 否 | 出口国家（海关国家列表获取id） |
| importer_country | string | 否 | 进口国家（海关国家列表获取id） |
| limit | string | 否 | 每页数量:[10,20,50,100] |
| page | string | 否 | 页码 |
| tradeNumSort | string | 否 | 交易数量排序:1=是，其他任何值是不按数量排序 |

---

#### 1.7 获取海关商家交易

获取海关商家交易统计数据。

**接口地址**: `POST /api/customs/business`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| type | string | 否 | 公司类型:[importer,exporter]，进口商OR出口商 |
| start_time | string | 否 | 起始时间（格式:xxxx-xx-xx） |
| end_time | string | 否 | 结束时间（格式:xxxx-xx-xx） |
| product | string | 否 | 产品名称 |
| hscode | string | 否 | 海关编码 |
| exporter_country | string | 否 | 出口国家（海关国家列表获取id） |
| importer_country | string | 否 | 进口国家（海关国家列表获取id） |
| buyer | string | 否 | 进口商 |
| seller | string | 否 | 出口商 |
| limit | string | 否 | 每页数量:[10,20,50,100] |
| page | string | 否 | 页码 |
| tradeNumSort | string | 否 | 交易数量排序:1=是，其他任何值是不按数量排序 |

---

#### 1.8 获取海关中国供应商交易

获取中国供应商交易数据。

**接口地址**: `POST /api/customs/cn_supplier_business`

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
| importer_country | string | 否 | 进口国家（海关国家列表获取id） |
| buyer | string | 否 | 进口商 |
| seller | string | 否 | 出口商 |
| limit | string | 否 | 每页数量:[10,20,50,100] |
| page | string | 否 | 页码 |
| tradeNumSort | string | 否 | 交易数量排序:1=是，其他任何值是不按数量排序 |

---

#### 1.9 导出海关数据

导出海关数据记录。

**接口地址**: `POST /api/customs/export_customs_data`

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
| recordType | string | 否 | 区分进出口数据:Inport=进口数据，Export=出口数据 |
| exclude_logistics | string | 否 | 排除物流字符，可多个，用","相连 |
| exclude_type | string | 否 | 排除物流类型:importer=进口商,exporter=出口商,both=两者,none=不排除 |
| Range | string | 否 | 范围：in=指定传递的海关记录的snow_flake_id来筛选，diy=通过筛选条件进行查找 |
| IdAry[] | string | 否 | 海关数据的snow_flake_id，Range值是page时使用，可传递多个 |
| export_all_start | string | 否 | 当Range设置为diy时使用，导出数量起始 |
| export_all_len | string | 否 | 当Range设置为diy时使用，导出数量限制 |

---

### 2. 海关公司详情

#### 2.1 获取海关公司详情

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

---

#### 2.2 获取海关公司贸易趋势

获取海关公司的月度贸易趋势数据。

**接口地址**: `POST /api/customs_company/get_company_trade_analysis`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| tradeType | string | 是 | 类型（importer,exporter）进口商OR出口商 |
| company_id | string | 是 | 海关公司id(snow_flake_id) |
| start_time | string | 否 | 起始时间 |
| end_time | string | 否 | 结束时间 |

---

#### 2.3 获取海关公司进出口记录

获取海关公司的进出口记录列表。

**接口地址**: `POST /api/customs_company/get_company_import_and_export_data`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| tradeType | string | 是 | 类型（importer,exporter）进口商OR出口商 |
| company_id | string | 是 | 海关公司id(snow_flake_id) |
| limit | string | 否 | 每页数量:[10,20,50,100] |
| page | string | 否 | 页码 |

---

#### 2.4 获取海关公司贸易伙伴记录

获取海关公司的贸易伙伴列表。

**接口地址**: `POST /api/customs_company/get_company_trade_partner_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| tradeType | string | 是 | 类型（importer,exporter）进口商OR出口商 |
| company_id | string | 是 | 海关公司id(snow_flake_id) |
| limit | string | 否 | 每页数量 |
| page | string | 否 | 页码 |
| trade_order_desc | string | 否 | 交易数据排序 |

---

#### 2.5 获取海关公司HS编码记录

获取海关公司的HS编码产品记录。

**接口地址**: `POST /api/customs_company/get_company_hs_code_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| tradeType | string | 是 | 类型（importer,exporter）进口商OR出口商 |
| company_id | string | 是 | 海关公司id(snow_flake_id) |
| limit | string | 否 | 每页数量 |
| page | string | 否 | 页码 |
| trade_order_desc | string | 否 | 交易数据排序 |

---

#### 2.6 获取海关公司采供产品列表

获取海关公司的采购或供应产品列表。

**接口地址**: `POST /api/customs_company/get_company_product_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| tradeType | string | 是 | 类型（importer,exporter）进口商OR出口商 |
| company_id | string | 是 | 海关公司id(snow_flake_id) |
| limit | string | 否 | 每页数量 |
| page | string | 否 | 页码 |

---

#### 2.7 获取海关公司贸易区域

获取海关公司的贸易区域分布。

**接口地址**: `POST /api/customs_company/get_company_trade_area`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| tradeType | string | 是 | 类型（importer,exporter）进口商OR出口商 |
| company_id | string | 是 | 海关公司id(snow_flake_id) |
| limit | string | 否 | 每页数量 |
| page | string | 否 | 页码 |

---

#### 2.8 获取海关公司贸易港口统计

获取海关公司的贸易港口统计数据。

**接口地址**: `POST /api/customs_company/get_company_port_statistics`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| tradeType | string | 是 | 类型（importer,exporter）进口商OR出口商 |
| company_id | string | 是 | 海关公司id(snow_flake_id) |
| limit | string | 否 | 每页数量 |
| page | string | 否 | 页码 |
| trade_order_desc | string | 否 | 交易数据排序 |

---

#### 2.9 智能搜邮

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

---

#### 2.10 匹配公司名称的企业列表

根据海关公司名称匹配企业库中的企业信息。

**接口地址**: `POST /api/customs_company/match_company_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| companyId | string | 是 | 海关公司id(snow_flake_id) |
| name | string | 是 | 海关公司名称 |

---

#### 2.11 匹配公司的联系人列表

获取匹配企业的联系人列表。

**接口地址**: `POST /api/customs_company/match_company_contact_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| company_id | string | 是 | 海关公司id(snow_flake_id) |
| seniority_screen_val | string | 否 | 管理层（从管理层列表获取"value"） |
| department_screen_val | string | 否 | 部门（从部门列表获取"value"） |
| limit | string | 否 | 每页数量:[10,20,50,100] |
| page | string | 否 | 页码 |

---

### 3. 广交会

#### 3.1 广交会分类列表

获取广交会产品分类列表。

**接口地址**: `GET /api/canton_fair/get_category_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
```

---

#### 3.2 广交会国家列表

获取广交会参展国家列表。

**接口地址**: `GET /api/canton_fair/get_country_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
```

---

#### 3.3 广交会列表

查询广交会参展商/采购商列表。

**接口地址**: `POST /api/canton_fair/get_canton_fair_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| year | string | 否 | 年限，代表第几届，如124-136 |
| category | string | 否 | 分类，从分类列表中获取名称使用 |
| country_iso_code | string | 否 | 国家，从国家列表中获取country_iso_code值使用 |
| data_from | string | 否 | 数据来源:'官方','第三方' |
| company_name | string | 否 | 采购商公司名字 |
| shopping_list | string | 否 | 采购产品名称 |
| have_mobile | string | 否 | 含有电话记录:0,1 |
| have_email | string | 否 | 含有邮箱记录:0,1 |
| have_website | string | 否 | 含有官网记录:0,1 |
| limit | string | 否 | 每页数量 |
| page | string | 否 | 页码 |

---

#### 3.4 获取广交会详情

获取广交会参展记录详情。

**接口地址**: `POST /api/canton_fair/get_canton_fair_detail`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | string | 是 | 广交会记录ID |

---

#### 3.5 获取广交会关联的企业员工列表

获取广交会关联的企业员工列表。

**接口地址**: `POST /api/canton_fair/get_canton_fair_employee_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | string | 是 | 广交会记录ID |
| page | string | 否 | 页码 |

---

### 4. 中国企业

#### 4.1 中国进出口企业列表

查询中国进出口企业列表。

**接口地址**: `POST /api/cn_enterprise/get_cn_company_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 否 | 中文名称 |
| op_scope | string | 否 | 经营范围 |
| product_name | string | 否 | 产品名称 |
| industry_name_lv1 | string | 否 | 行业大类 |
| industry_name_lv2 | string | 否 | 行业小类 |
| date_start | string | 否 | 成立年限起始 |
| date_end | string | 否 | 成立年限结束 |
| num_start | string | 否 | 人员规模起始 |
| num_end | string | 否 | 人员规模结束 |
| ent_status | string | 否 | 经营状态 |
| ent_type | string | 否 | 企业类型 |
| regProvince | string | 否 | 省 |
| regCity | string | 否 | 市 |
| regArea | string | 否 | 区 |
| telephone | string | 否 | 电话 |
| email | string | 否 | 邮箱 |
| have_supplier | string | 否 | 供应商 |
| have_customer | string | 否 | 客户 |
| have_financing | string | 否 | 融资 |
| reg_cap_start | string | 否 | 注册资本起始 |
| reg_cap_end | string | 否 | 注册资本结束 |
| cap_type | string | 否 | 资本类型 |
| have_website | string | 否 | 网址信息 |
| have_credit | string | 否 | 进出口信用 |

---

#### 4.2 中国进出口企业详情

获取中国进出口企业详细信息。

**接口地址**: `POST /api/cn_enterprise/get_cn_company_detail`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| id | string | 是 | 企业ID |

---

#### 4.3 获取地区列表

获取中国地区列表（省市区）。

**接口地址**: `POST /api/cn_enterprise/get_area_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

---

#### 4.4 获取行业列表

获取行业分类列表。

**接口地址**: `POST /api/cn_enterprise/get_industry_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

---

#### 4.5 导出中国企业数据

导出中国企业数据。

**接口地址**: `POST /api/cn_enterprise/export_cn_enterprise_data`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| name | string | 否 | 中文名称 |
| export_type | string | 否 | 导出类型:limit=指定公司id导出,all=条件下所有记录 |
| export_record_ids[] | string | 否 | 当export_type等于limit时使用，可多个 |
| export_all_start | string | 否 | 当export_type设置为all时使用，导出数量起始 |
| export_all_len | string | 否 | 当export_type设置为all时使用，导出数量限制 |

---

### 5. 企业与员工公用

#### 5.1 获取企业部门列表

获取企业部门分类列表。

**接口地址**: `POST /api/base/get_department_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

---

#### 5.2 获取企业、员工地区列表

获取地区列表（用于企业和员工筛选）。

**接口地址**: `POST /api/base/get_area_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| level | string | 否 | 层级：1，2，3 |
| search | string | 否 | 搜索关键词 |

---

#### 5.3 获取企业行业列表

获取行业分类列表。

**接口地址**: `POST /api/base/get_industry_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| search | string | 否 | 搜索关键词 |

---

#### 5.4 获取企业技术列表

获取企业技术分类列表。

**接口地址**: `POST /api/base/get_technology_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| search | string | 否 | 搜索关键词 |

---

#### 5.5 获取管理层列表

获取管理层级分类列表。

**接口地址**: `POST /api/base/get_manage_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

---

#### 5.6 领英反查企业或员工

通过领英URL反查企业或员工信息。

**接口地址**: `POST /api/base/linkedin_search_enterprise_or_employee`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| linkedin | string | 是 | 领英地址 |

---

### 6. 企业

#### 6.1 全球企业列表

搜索全球企业列表。

**接口地址**: `POST /api/enterprise/get_enterprise_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| search | string | 否 | 名称 |
| country | string | 否 | 国家，可多个用","连接 |
| state | string | 否 | 州，可多个用","连接 |
| city | string | 否 | 市，可多个用","连接 |
| postal_code | string | 否 | 邮编，可多个用","连接 |
| industry_screen_val | string | 否 | 行业，可多个用","连接 |
| employee_num_type | string | 否 | 人员规模类型:predefine=预定义,custom=自定义,unknown=未知 |
| employee_num_val | string | 否 | 预定义和自定义类型下填写 |
| technology_screen_val | string | 否 | 技术，可多个用","连接 |
| annual_revenue_screen_type | string | 否 | 企业收入类型：between=范围之内,readyKnown=已知,unknown=未知 |
| founded_year_screen_val | string | 否 | 成立时间，两个日期用逗号连接 |
| contact_screen_type_val | string | 否 | 联系方式：facebook,twitter,linkedin,mobile,email,website |
| limit | string | 否 | 每页数量：10，20，50，100 |
| page | string | 否 | 页码 |
| is_pagination | string | 否 | 是否分页：0=否，1=是 |

---

#### 6.2 企业详情

获取企业详细信息。

**接口地址**: `POST /api/enterprise/get_enterprise_detail`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| enterprise_id | string | 是 | 企业id |

---

#### 6.3 获取企业下员工指标部门统计

获取企业员工按部门统计的指标数据。

**接口地址**: `POST /api/enterprise/get_employee_metrics_department_total`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| enterprise_id | string | 是 | 企业id |

---

#### 6.4 获取企业下员工指标总数统计

获取企业员工指标总数统计。

**接口地址**: `POST /api/enterprise/get_employee_metrics_all_total`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| enterprise_id | string | 是 | 企业id |

---

#### 6.5 获取企业下员工指标保留统计

获取企业员工指标保留统计。

**接口地址**: `POST /api/enterprise/get_employee_metrics_reserve_total`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| enterprise_id | string | 是 | 企业id |

---

#### 6.6 获取企业融资事件列表

获取企业融资事件列表。

**接口地址**: `POST /api/enterprise/get_enterprise_funding_events_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| enterprise_id | string | 是 | 企业id |

---

#### 6.7 获取企业下的员工列表

获取企业员工列表。

**接口地址**: `POST /api/enterprise/get_enterprise_employee`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| enterprise_id | string | 是 | 企业id |
| seniority_screen_val | string | 否 | 管理层，多选 |
| department_screen_val | string | 否 | 部门，多选 |
| have_email | string | 否 | 是否有邮箱，0=否，1=是 |
| have_mobile | string | 否 | 是否有电话，0=否，1=是 |
| limit | string | 否 | 每页数量 |
| page | string | 否 | 页码 |

---

#### 6.8 获取国家列表

获取国家列表。

**接口地址**: `POST /api/enterprise/get_country_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

---

#### 6.9 域名搜索企业

通过域名搜索企业。

**接口地址**: `POST /api/enterprise/domain_search_enterprise`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| domain | string | 是 | 域名 |

---

#### 6.10 获取推荐的企业列表

获取推荐的企业列表。

**接口地址**: `POST /api/enterprise/get_recommend_enterprise_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| enterprise_id | string | 是 | 企业id |

---

#### 6.11 获取当前企业的上下级企业

获取企业的上下级关联企业。

**接口地址**: `POST /api/enterprise/get_enterprise_superior_and_subordinate`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| enterprise_id | string | 是 | 企业id |

---

#### 6.12 导出企业记录

导出企业数据记录。

**接口地址**: `POST /api/enterprise/export_enterprise_data`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| search | string | 否 | 名称 |
| country | string | 否 | 国家，可多个用","连接 |
| export_type | string | 否 | 导出类型:ida=指定企业id导出,all=条件下所有记录 |
| export_record_ids[] | string | 否 | 当export_type等于ida时使用，可多个 |
| export_all_start | string | 否 | 当export_type设置为all时使用，导出数量起始 |
| export_all_len | string | 否 | 当export_type设置为all时使用，导出数量限制 |

---

### 7. 企业员工

#### 7.1 全球企业员工列表

搜索全球企业员工列表。

**接口地址**: `POST /api/employee/get_employee_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| employee_name | string | 否 | 员工名字 |
| title_screen_type | string | 否 | 职称搜索类型：have=包含，know=已知，unknown=未知 |
| title_search | string | 否 | 职称搜索值，当搜索类型为包含时有效，多个用逗号连接 |
| seniority_screen_val | string | 否 | 管理层，通过列表获取对应，多个用逗号连接 |
| department_screen_val | string | 否 | 部门和职务，通过列表获取对应，多个用逗号连接 |
| company_screen_type | string | 否 | 所属公司筛选：have=包含，known=已知，unknown=未知 |
| company_is_have_screen_val | string | 否 | 所属公司，公司id值，多个用逗号连接 |
| country | string | 否 | 国家，多个用逗号连接 |
| state | string | 否 | 州，多个用逗号连接 |
| city | string | 否 | 城市，多个用逗号连接 |
| contact_screen_type_val | string | 否 | 联系方式：facebook,twitter,linkedin,github,mobile,email |
| industry_screen_val | string | 否 | 行业，通过行业列表获取，多个用逗号连接 |
| limit | string | 否 | 每页数量：10，20，50，100 |
| page | string | 否 | 页码 |

---

#### 7.2 获取企业员工职称列表

获取员工职称分类列表。

**接口地址**: `POST /api/employee/get_employee_title_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| search | string | 否 | 搜索关键词 |

---

#### 7.3 获取企业员工详细信息

获取企业员工的详细信息。

**接口地址**: `POST /api/employee/get_employee_detail`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| employee_id | string | 是 | 员工ID |

---

#### 7.4 获取企业员工的同事列表

获取同一企业的其他员工列表。

**接口地址**: `POST /api/employee/get_employee_colleague`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| employee_id | string | 是 | 员工id |
| seniority | string | 否 | 管理层筛选 |
| department | string | 否 | 部门筛选 |
| have_email | string | 否 | 是否有邮箱：0，1 |
| have_mobile | string | 否 | 是否有电话：0，1 |
| limit | string | 否 | 每页数量：10，20，50，100 |
| page | string | 否 | 页码 |

---

#### 7.5 获取同名的企业员工

获取同名的其他企业员工。

**接口地址**: `POST /api/employee/get_same_name_employee_list`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| employee_id | string | 是 | 员工id |
| name | string | 是 | 员工名字 |

---

#### 7.6 联系方式搜索员工

通过邮箱或电话搜索员工。

**接口地址**: `POST /api/employee/contact_type_search_employee`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| type | string | 是 | 搜索类型：email=邮箱，mobile=电话 |
| keywords | string | 是 | 搜索值 |
| limit | string | 否 | 每页数量：10，20，50，100 |
| page | string | 否 | 页码 |

---

#### 7.7 导出企业员工数据

导出企业员工数据。

**接口地址**: `POST /api/employee/export_employee_data`

**请求头**:
```
Authorization: Bearer YOUR_TOKEN
Content-Type: application/x-www-form-urlencoded
```

**请求参数**:

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| employee_name | string | 否 | 员工名字 |
| export_type | string | 否 | 导出类型:limit=指定员工id导出,all=条件下所有记录 |
| export_record_ids[] | string | 否 | 当export_type等于limit时使用，可多个 |
| export_all_start | string | 否 | 当export_type设置为all时使用，导出数量起始 |
| export_all_len | string | 否 | 当export_type设置为all时使用，导出数量限制 |

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
