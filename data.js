window.DASH_DATA = {
  "updatedAt": "2026-09-24T22:50:19.485+08:00",
  "weather": {
    "ok": true,
    "description": "晴",
    "iconKey": "clear",
    "tempC": 24,
    "feelsLikeC": 26,
    "humidity": 76,
    "windKph": 12,
    "windDir": "东风",
    "place": "Pootung",
    "observedAt": "2026-09-24T22:50:17.783+08:00",
    "fetchedAt": "2026-09-24T22:50:19.485+08:00",
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
          "usedPct": 5,
          "resetAt": "2026-09-25T00:20:00.338+08:00"
        },
        {
          "name": "7天",
          "usedPct": 83,
          "resetAt": "2026-09-27T16:00:00.338+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 31,
          "resetAt": "2026-09-27T16:00:00.338+08:00"
        }
      ],
      "fetchedAt": "2026-09-24T20:48:24.359+08:00",
      "error": "本机 Claude 额度采集失败（详情见本机 stderr）",
      "stale": true,
      "lastAttemptAt": "2026-09-24T22:50:17.833+08:00"
    },
    "codex": {
      "ok": true,
      "label": "Codex · 本机",
      "windows": [
        {
          "name": "周",
          "usedPct": 71,
          "resetAt": "2026-09-30T07:40:40.000+08:00"
        }
      ],
      "fetchedAt": "2026-09-24T22:50:17.882+08:00",
      "error": null
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
          "usedPct": 27,
          "resetAt": "2026-09-28T21:00:00.249+08:00"
        }
      ],
      "fetchedAt": "2026-09-24T21:59:22.234+08:00",
      "error": "用量接口返回 HTTP 429",
      "stale": true,
      "lastAttemptAt": "2026-09-24T22:50:17.883+08:00"
    },
    "claude72": {
      "ok": true,
      "label": "Claude · 72",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 0,
          "resetAt": null
        },
        {
          "name": "7天",
          "usedPct": 100,
          "resetAt": "2026-09-27T19:59:59.951+08:00"
        }
      ],
      "fetchedAt": "2026-09-24T22:50:17.884+08:00",
      "error": null
    }
  },
  "providerTypes": {
    "claude": "claude",
    "codex": "codex",
    "claude84": "claude-remote",
    "claude72": "claude-remote"
  }
};
