window.DASH_DATA = {
  "updatedAt": "2026-09-13T22:42:42.104+08:00",
  "weather": {
    "ok": true,
    "description": "晴",
    "iconKey": "clear",
    "tempC": 25,
    "feelsLikeC": 26,
    "humidity": 70,
    "windKph": 6,
    "windDir": "东东北风",
    "place": "Shanghaishih",
    "observedAt": "2026-09-13T22:42:36.783+08:00",
    "fetchedAt": "2026-09-13T22:42:42.105+08:00",
    "error": null
  },
  "quote": {
    "text": "把无人走过的路，踩成后来人的近路。",
    "source": "示例"
  },
  "sources": {
    "claude": {
      "ok": true,
      "label": "Claude · 本机",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 29,
          "resetAt": "2026-09-14T01:59:59.708+08:00"
        },
        {
          "name": "7天",
          "usedPct": 12,
          "resetAt": "2026-09-20T15:59:59.708+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 18,
          "resetAt": "2026-09-20T15:59:59.708+08:00"
        }
      ],
      "fetchedAt": "2026-09-13T22:42:36.810+08:00",
      "error": null
    },
    "codex": {
      "ok": true,
      "label": "Codex · 本机",
      "windows": [
        {
          "name": "周",
          "usedPct": 17,
          "resetAt": "2026-09-19T16:15:16.000+08:00"
        }
      ],
      "fetchedAt": "2026-09-13T22:32:28.560+08:00",
      "error": "Codex 额度采集失败（详情见本机 stderr）",
      "stale": true,
      "lastAttemptAt": "2026-09-13T22:42:36.856+08:00"
    },
    "claude84": {
      "ok": true,
      "label": "Claude · 84",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": null
        },
        {
          "name": "7天",
          "usedPct": 42,
          "resetAt": "2026-09-14T20:59:59.994+08:00"
        }
      ],
      "fetchedAt": "2026-09-13T22:42:36.857+08:00",
      "error": null
    },
    "claude72": {
      "ok": false,
      "label": "Claude · 72",
      "windows": [],
      "fetchedAt": "2026-09-13T22:42:36.858+08:00",
      "error": "钥匙串凭据中没有 accessToken"
    }
  },
  "providerTypes": {
    "claude": "claude",
    "codex": "codex",
    "claude84": "claude-remote",
    "claude72": "claude-remote"
  }
};
