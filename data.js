window.DASH_DATA = {
  "updatedAt": "2026-09-15T15:00:38.215+08:00",
  "weather": {
    "ok": true,
    "description": "阴",
    "iconKey": "cloudy",
    "tempC": 28,
    "feelsLikeC": 27,
    "humidity": 41,
    "windKph": 17,
    "windDir": "东北风",
    "place": "Pootung",
    "observedAt": "2026-09-15T15:00:21.890+08:00",
    "fetchedAt": "2026-09-15T15:00:38.215+08:00",
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
          "usedPct": 20,
          "resetAt": "2026-09-15T15:40:00.878+08:00"
        },
        {
          "name": "7天",
          "usedPct": 71,
          "resetAt": "2026-09-20T16:00:00.878+08:00"
        },
        {
          "name": "Fable",
          "usedPct": 75,
          "resetAt": "2026-09-20T15:59:59.878+08:00"
        }
      ],
      "fetchedAt": "2026-09-15T11:52:52.474+08:00",
      "error": "本机 Claude 额度采集失败（详情见本机 stderr）",
      "stale": true,
      "lastAttemptAt": "2026-09-15T15:00:21.947+08:00"
    },
    "codex": {
      "ok": true,
      "label": "Codex · 本机",
      "windows": [
        {
          "name": "周",
          "usedPct": 49,
          "resetAt": "2026-09-19T16:15:16.000+08:00"
        }
      ],
      "fetchedAt": "2026-09-15T11:52:52.520+08:00",
      "error": "Codex 额度采集失败（详情见本机 stderr）",
      "stale": true,
      "lastAttemptAt": "2026-09-15T15:00:22.036+08:00"
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
          "usedPct": 0,
          "resetAt": "2026-09-21T21:00:00.000+08:00"
        }
      ],
      "fetchedAt": "2026-09-15T11:52:52.521+08:00",
      "error": "凭据已过期，需要在这台机器上重新登录 Claude",
      "stale": true,
      "lastAttemptAt": "2026-09-15T15:00:22.039+08:00"
    },
    "claude72": {
      "ok": true,
      "label": "Claude · 72",
      "windows": [
        {
          "name": "5小时",
          "usedPct": 100,
          "resetAt": "2026-09-14T17:30:00.722+08:00"
        },
        {
          "name": "7天",
          "usedPct": 64,
          "resetAt": "2026-09-20T20:00:00.722+08:00"
        }
      ],
      "fetchedAt": "2026-09-14T16:27:11.153+08:00",
      "error": "凭据已过期，需要在这台机器上重新登录 Claude",
      "stale": true,
      "lastAttemptAt": "2026-09-15T15:00:22.040+08:00"
    }
  },
  "providerTypes": {
    "claude": "claude",
    "codex": "codex",
    "claude84": "claude-remote",
    "claude72": "claude-remote"
  }
};
