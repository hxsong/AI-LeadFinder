---
title: "IPinfo API Overview"
navTitle: "IPinfo APIs"
slug: "/developers/ipinfo-api"
description: "Complete guide to IPinfo's API tiers including Lite, Core, Plus, Business, and Enterprise plans with feature comparisons."
---

# IPinfo API

IPinfo's API services provide a mix of geolocation, ASN, privacy, carrier detection, and confidence metrics across different tiers of API services.

### IPinfo Bundle APIs

- **[IPinfo Lite](/developers/lite-api)**: A free API with unlimited requests provides general location data (country, country code, continent, continent code) and ASN details (ASN, name, domain).
- **[IPinfo Core](/developers/core-api)**: The IPinfo Core API plan provides detailed IP address information including geolocation (city, region, country, continent, latitude/longitude, timezone, postal code), ASN and ISP details (ASN, name, domain, type), and network characteristics such as anonymity, anycast, hosting, mobile, and satellite status.
- **[IPinfo Plus](/developers/plus-api)**: The IPinfo Plus API plan provides comprehensive IP data including full geolocation (city, region, country, continent, coordinates, timezone, postal code, geoname ID, radius, and last change date), ASN details (ASN, name, domain, type), and extensive network characteristics such as mobile, anonymous proxy, relay, Tor, VPN, anycast, hosting, and satellite status.
- **[IPinfo Max](/pricing)**: The IPinfo Max API provides comprehensive IP intelligence with complete anonymization coverage. It includes full geolocation data (city, region, country, continent, coordinates, timezone, postal code, geoname ID, accuracy radius, and last change date), ASN details (ASN, name, domain, type), and advanced network characteristics including VPN, proxy, Tor, relay, hosting, and residential proxy detection with behavioral activity signals.

API Schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "IPinfo API Response",
  "description": "Schema for IPinfo API response across Lite, Core, Plus, and Max tiers",
  "type": "object",
  "properties": {
    "ip": {
      "type": "string",
      "description": "The IP address being queried.",
      "example": "51.68.57.72",
      "availability": {
        "lite": true,
        "core": true,
        "plus": true,
        "max": true
      }
    },
    "hostname": {
      "type": "string",
      "description": "The hostname associated with the IP address.",
      "example": "generic.hostname.com",
      "availability": {
        "lite": true,
        "core": true,
        "plus": true,
        "max": true
      }
    },
    "geo": {
      "type": "object",
      "description": "Geographic location information for the IP address.",
      "properties": {
        "city": {
          "type": "string",
          "description": "The city where the IP address is located.",
          "example": "Lille",
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "region": {
          "type": "string",
          "description": "The region or state where the IP address is located.",
          "example": "Hauts-de-France",
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "region_code": {
          "type": "string",
          "description": "The two-letter region code in ISO 3166 format.",
          "example": "HDF",
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "country": {
          "type": "string",
          "description": "The country where the IP address is located.",
          "example": "France",
          "availability": {
            "lite": true,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "country_code": {
          "type": "string",
          "description": "The ISO 3166 country code of the IP address.",
          "example": "FR",
          "availability": {
            "lite": true,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "continent": {
          "type": "string",
          "description": "The continent where the IP address is located.",
          "example": "Europe",
          "availability": {
            "lite": true,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "continent_code": {
          "type": "string",
          "description": "The two-letter continent code.",
          "example": "EU",
          "availability": {
            "lite": true,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "latitude": {
          "type": "number",
          "description": "The latitude coordinate of the IP address location.",
          "example": 50.63297,
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "longitude": {
          "type": "number",
          "description": "The longitude coordinate of the IP address location.",
          "example": 3.05858,
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "timezone": {
          "type": "string",
          "description": "The local timezone of the IP address location, formatted according to the IANA Time Zone Database.",
          "example": "Europe/Paris",
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "postal_code": {
          "type": "string",
          "description": "The postal or zip code associated with the IP address location.",
          "example": "59000",
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "dma_code": {
          "type": "string",
          "description": "The Designated Market Area (DMA) code, representing a TV media market region.",
          "example": "59",
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        },
        "geoname_id": {
          "type": "integer",
          "description": "The unique numerical identifier for geographic locations from Geonames.org.",
          "example": 2998324,
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        },
        "radius": {
          "type": "integer",
          "description": "The location accuracy radius in kilometers.",
          "example": 200,
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        },
        "last_changed": {
          "type": "string",
          "format": "date",
          "description": "The date when the IP address's location was last updated, in YYYY-MM-DD format (ISO-8601).",
          "example": "2025-06-15",
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        }
      }
    },
    "as": {
      "type": "object",
      "description": "Autonomous System (AS) information for the IP address.",
      "properties": {
        "asn": {
          "type": "string",
          "description": "The Autonomous System Number (ASN) identifying the organization that owns or operates the IP address.",
          "example": "AS16276",
          "availability": {
            "lite": true,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "name": {
          "type": "string",
          "description": "The official name of the Autonomous System (AS) organization.",
          "example": "OVH SAS",
          "availability": {
            "lite": true,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "domain": {
          "type": "string",
          "description": "The official domain name of the Autonomous System (AS) organization.",
          "example": "ovhcloud.com",
          "availability": {
            "lite": true,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "type": {
          "type": "string",
          "description": "The type of the Autonomous System (AS) organization, such as hosting, ISP, education, government, or business.",
          "example": "hosting",
          "enum": ["hosting", "isp", "education", "government", "business"],
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "last_changed": {
          "type": "string",
          "format": "date",
          "description": "The date when the IP address's ASN was last updated, in YYYY-MM-DD format (ISO-8601).",
          "example": "2025-03-09",
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        }
      }
    },
    "mobile": {
      "type": "object",
      "description": "Mobile carrier information for the IP address.",
      "availability": {
        "lite": false,
        "core": false,
        "plus": true,
        "max": true
      },
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the mobile carrier organization.",
          "example": "dtac",
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        },
        "mcc": {
          "type": "string",
          "description": "The Mobile Country Code (MCC) of the carrier.",
          "example": "520",
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        },
        "mnc": {
          "type": "string",
          "description": "The Mobile Network Code (MNC) of the carrier.",
          "example": "05",
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        }
      }
    },
    "anonymous": {
      "type": "object",
      "description": "Anonymity and privacy service detection information.",
      "properties": {
        "is_proxy": {
          "type": "boolean",
          "description": "Indicates whether the IP address is an open web proxy.",
          "example": false,
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "is_relay": {
          "type": "boolean",
          "description": "Indicates whether the IP address is part of an anonymous relay service, such as iCloud Private Relay.",
          "example": false,
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "is_tor": {
          "type": "boolean",
          "description": "Indicates whether the IP address is a TOR (The Onion Router) exit node.",
          "example": false,
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "is_vpn": {
          "type": "boolean",
          "description": "Indicates whether the IP address is a Virtual Private Network (VPN) exit node.",
          "example": true,
          "availability": {
            "lite": false,
            "core": true,
            "plus": true,
            "max": true
          }
        },
        "name": {
          "type": "string",
          "description": "The name of the privacy service provider, such as a VPN, Proxy, or Relay service provider.",
          "example": "NordVPN",
          "availability": {
            "lite": false,
            "core": false,
            "plus": true,
            "max": true
          }
        },
        "last_seen": {
          "type": "string",
          "format": "date",
          "description": "The latest date this IP was detected as a VPN, Residential Proxy or other proxies.",
          "example" "2025-12-03",
          },
          "availability": {
            "lite": false,
            "core": false,
            "plus": false,
            "max": true
          }
        },
        "percent_days_seen": {
          "type": "integer",
          "description": "Percentage of the past 90 days this IP was seen as a residential proxy.",
          "example": 13,
          "availability": {
            "lite": false,
            "core": false,
            "plus": false,
            "max": true
          }
        }
      }
    },
    "is_anonymous": {
      "type": "boolean",
      "description": "Indicates whether the IP address is anonymous. true if the IP address is associated with an IP privacy service.",
      "example": false,
      "availability": {
        "lite": false,
        "core": true,
        "plus": true,
        "max": true
      }
    },
    "is_anycast": {
      "type": "boolean",
      "description": "Indicates whether the IP address is an anycast IP. true if the IP address maps to multiple physical servers.",
      "example": false,
      "availability": {
        "lite": false,
        "core": true,
        "plus": true,
        "max": true
      }
    },
    "is_hosting": {
      "type": "boolean",
      "description": "Indicates whether the IP address is an internet service hosting IP address.",
      "example": true,
      "availability": {
        "lite": false,
        "core": true,
        "plus": true,
        "max": true
      }
    },
    "is_mobile": {
      "type": "boolean",
      "description": "Indicates whether the IP address belongs to a mobile network.",
      "example": false,
      "availability": {
        "lite": false,
        "core": true,
        "plus": true,
        "max": true
      }
    },
    "is_satellite": {
      "type": "boolean",
      "description": "Indicates whether the IP address is part of a satellite internet connection.",
      "example": false,
      "availability": {
        "lite": false,
        "core": true,
        "plus": true,
        "max": true
      }
    }
  }
}
```

| Field Name | Description | Example | [IPinfo Lite](/developers/lite-api) | [IPinfo Core](/developers/core-api) | [IPinfo Plus](/developers/plus-api) | [IPinfo Max](/pricing) |
| --- | --- | --- | --- | --- | --- | --- |
| **`ip`** | The IP address being queried. | `51.68.57.72` | ✓ | ✓ | ✓ | ✓ |
| **`hostname`** | The hostname associated with the IP address. | `generic.hostname.com` | ✓ | ✓ | ✓ | ✓ |
| **`geo`** | `city` | The city where the IP address is located. | `Lille` | ✗ | ✓ | ✓ | ✓ |
| `region` | The region or state where the IP address is located. | `Hauts-de-France` | ✗ | ✓ | ✓ | ✓ |
| `region_code` | The two-letter region code in ISO 3166 format. | `HDF` | ✗ | ✓ | ✓ | ✓ |
| `country` | The country where the IP address is located. | `France` | ✓ | ✓ | ✓ | ✓ |
| `country_code` | The ISO 3166 country code of the IP address. | `FR` | ✓ | ✓ | ✓ | ✓ |
| `continent` | The continent where the IP address is located. | `Europe` | ✓ | ✓ | ✓ | ✓ |
| `continent_code` | The two-letter continent code. | `EU` | ✓ | ✓ | ✓ | ✓ |
| `latitude` | The latitude coordinate of the IP address location. | `50.63297` | ✗ | ✓ | ✓ | ✓ |
| `longitude` | The longitude coordinate of the IP address location. | `3.05858` | ✗ | ✓ | ✓ | ✓ |
| `timezone` | The local timezone of the IP address location, formatted according to the IANA Time Zone Database. | `Europe/Paris` | ✗ | ✓ | ✓ | ✓ |
| `postal_code` | The postal or zip code associated with the IP address location. | `59000` | ✗ | ✓ | ✓ | ✓ |
| `dma_code` | The Designated Market Area (DMA) code, representing a TV media market region. | `59` | ✗ | ✗ | ✓ | ✓ |
| `geoname_id` | The unique numerical identifier for geographic locations from Geonames.org. | `2998324` | ✗ | ✗ | ✓ | ✓ |
| `radius` | The location accuracy radius in kilometers. | `200` | ✗ | ✗ | ✓ | ✓ |
| `last_changed` | The date when the IP address's location was last updated, in YYYY-MM-DD format (ISO-8601). | `2025-06-15` | ✗ | ✗ | ✓ | ✓ |
| **`as`** | `asn` | The Autonomous System Number (ASN) identifying the organization that owns or operates the IP address. | `AS16276` | ✓ | ✓ | ✓ | ✓ |
| `name` | The official name of the Autonomous System (AS) organization. | `OVH SAS` | ✓ | ✓ | ✓ | ✓ |
| `domain` | The official domain name of the Autonomous System (AS) organization. | `ovhcloud.com` | ✓ | ✓ | ✓ | ✓ |
| `type` | The type of the Autonomous System (AS) organization, such as hosting, ISP, education, government, or business. | `hosting` | ✗ | ✓ | ✓ | ✓ |
| `last_changed` | The date when the IP address's ASN was last updated, in YYYY-MM-DD format (ISO-8601). | `2025-03-09` | ✗ | ✗ | ✓ | ✓ |
| **`mobile`** | `name` | The name of the mobile carrier organization. | `dtac` | ✗ | ✗ | ✓ | ✓ |
| `mcc` | The Mobile Country Code (MCC) of the carrier. | `520` | ✗ | ✗ | ✓ | ✓ |
| `mnc` | The Mobile Network Code (MNC) of the carrier. | `05` | ✗ | ✗ | ✓ | ✓ |
| **`anonymous`** | `is_proxy` | Indicates whether the IP address is an open web proxy. | `false` | ✗ | ✓ | ✓ | ✓ |
| `is_relay` | Indicates whether the IP address is part of an anonymous relay service, such as iCloud Private Relay. | `false` | ✗ | ✓ | ✓ | ✓ |
| `is_tor` | Indicates whether the IP address is a TOR (The Onion Router) exit node. | `false` | ✗ | ✓ | ✓ | ✓ |
| `is_vpn` | Indicates whether the IP address is a Virtual Private Network (VPN) exit node. | `true` | ✗ | ✓ | ✓ | ✓ |
| `name` | The name of the privacy service provider, such as a VPN, Proxy, Relay, or Residential Proxy service. | `NordVPN` | ✗ | ✗ | ✓ | ✓ |
| `last_seen` | Latest detection date for VPN, Residential Proxy and other proxies. | `2026-03-07` | ✗ | ✗ | ✗ | ✓ |
| `percent_days_seen` | % of past 90 days seen as Residential Proxy. | `13` | ✗ | ✗ | ✗ | ✓ |
| `**is_anonymous**` | Indicates whether the IP address is anonymous. `true` if the IP address is associated with an IP privacy service. | `false` | ✗ | ✓ | ✓ | ✓ |
| `**is_anycast**` | Indicates whether the IP address is an anycast IP. `true` if the IP address maps to multiple physical servers. | `false` | ✗ | ✓ | ✓ | ✓ |
| `**is_hosting**` | Indicates whether the IP address is an internet service hosting IP address. | `true` | ✗ | ✓ | ✓ | ✓ |
| `**is_mobile**` | Indicates whether the IP address belongs to a mobile network. | `false` | ✗ | ✓ | ✓ | ✓ |
| `**is_satellite**` | Indicates whether the IP address is part of a satellite internet connection. | `false` | ✗ | ✓ | ✓ | ✓ |

Currently, we have the following API services available directly for customers.

- [IPinfo Lite](/developers/lite-api): The IPinfo Lite API is our free plan that includes unlimited country-level geolocation and basic ASN information.
- [IPinfo Core](/developers/core-api): Our basic premium API plan that includes detailed geolocation data, ASN information, network flags, and access to the dedicated ASN API.
- [IPinfo Plus](/developers/plus-api): IPinfo Plus API provides detailed IP address data, including geolocation, ASN information, carrier details, anonymous IP address data details, and geolocation and ASN change frequency.
- [IPinfo Max](/pricing): IPinfo Max API provides full-coverage IP intelligence including geolocation, ASN and carrier data, provider-level anonymization detection, residential proxy behavior signals, and geo and ASN change tracking.
- [IPinfo Enterprise](/developers/enterprise-api): The IPinfo Enterprise plan includes everything in the Business plan plus IP Whois, IP Ranges, IP Activity, and a full list of domains hosted on the IP.

### Other IP APIs

Besides providing information about IP Addresses, IPInfo also offers APIs that can be used to get:

- [Geolocation API](/developers/geolocation): Query IP address geolocation data including city, region, country, and coordinates.
- [Privacy Detection API](/developers/privacy): Detect VPNs, proxies, Tor exit nodes, relays, and hosting providers.
- [ASN API](/developers/asn): Detailed information about ASNs
- [IP ranges API](/developers/ranges): IP ranges owned by a company.
- [Hosted Domains API](/developers/hosted-domains): Domains hosted on an IP address
- [IP WHOIS API](/developers/whois): Programmatically Access WHOIS Data
- [Residential Proxy Detection API](/developers/residential-proxy-api): Detection and detailed insights of residential proxy services
- [IP to Privacy Detection Extended API](/developers/privacy-extended-api): Provides detection metadata and confidence metrics for detecting anonymous IP data.

### IPinfo Legacy API

Starting in 2025, we rolled out a new updated API system. However, we continue to provide the same service through our legacy API service that many users have grandfathered into.

The legacy API system is actively maintained and provides the identical service as our standard API service. We will continue to provide access and service to our users who have been using the legacy service; however, we recommend that no new users request joining the legacy service.

The following section is for our legacy API system documentation that does not apply to our current API system.

**JSON Response**

We try to automatically detect when someone wants to call our API versus view our website, and then we send back the appropriate JSON response rather than HTML. We do this based on the user agent for known popular programming languages, tools, and frameworks. However, there are a couple of other ways to force a JSON response when it doesn't happen automatically.

One is to append `/json` at the end of any request:

```bash
curl ipinfo.io/json
curl ipinfo.io/8.8.8.8/json
```

The other is to set the `Accept` header to `application/json`:

```bash
curl -H "Accept: application/json" ipinfo.io
curl -H "Accept: application/json" ipinfo.io/8.8.8.8
```

**IPv6 API endpoint**

IPinfo's API ensures seamless support for both IPv4 and IPv6 connection. However, for technical reasons, we use distinct API endpoints:

- IPv4 connection: [ipinfo.io](https://ipinfo.io/)
- IPv6 connection: [v6.ipinfo.io](https://v6.ipinfo.io/)

If you're on an IPv6 address, use the ### [v6.ipinfo.io](https://v6.ipinfo.io/) API endpoint, which functions identically to the standard IPv4 API. All API parameters and arguments are supported as usual.

Example:

```bash
curl https://v6.ipinfo.io
```

Our website, however, is fully dual-stacked, supporting both IPv4 and IPv6 natively through the [ipinfo.io](https://ipinfo.io/) domain. Our IP data download product always includes both IPv4 and IPv6 IP addresses in each individual database download. If you are looking up IPv6 addresses as an API parameter or input, you can do so simply as well. Usage of [v6.ipinfo.io](https://v6.ipinfo.io/) only applies to IPv6 traffic visiting our API service.

By separating the API endpoints, we prevent unintended behavior when tools default to IPv6 (via AAAA records). This ensures you receive the expected address type for your query. Because if we have A and AAAA records for the domain (supporting both v4 and v6), the users would get their v6 address back when they go to ipinfo.io's API (internet services usually default to v6 if it’s available), which is not usually what they expect.
