# Universal Plugin Repo
### Monolithic/Universal plugin repository for Jellyfin Media Server

> [!NOTE]
> Updated every 24 hours, or when a change is pushed to this project

> [!CAUTION]
> Some plugins require further configuration or software so be sure to read the respective READMEs to ensure they work correctly

> [!TIP]
> Up to 3x faster catalogue loading <br>
> (tested on server with gigabit connection, client with 10mbps download from server)

```
Before: 12 seconds to load items 3 seconds to load images, 5-6 seconds with cache
After: 4 seconds to load items 1 second to load images, 1-2 seconds with cache
```

# Installation
1. Open Jellyfin dashboard
2. Naviage to to catalogue settings
3. (Optional) Remove all old repositories including the default jellyfin, this speeds up catalogue loading
4. Add the universal repository
```
https://raw.githubusercontent.com/0belous/universal-plugin-repo/refs/heads/main/manifest.json
```
4. Never add another repository again!

# Securtiy
Most sources are from [awesome-jellyfin](https://github.com/awesome-jellyfin/awesome-jellyfin)
The rest are from reputable developers, each source is reviewed before being added.
There is minimal risk from having even a known bad repository installed, as this project by nature acts as a proxy between your server and a malicious repository protecting your IP, however this stops being the case when you install a plugin code is not proxied and could contain malware.

Make sure you only install plugins you recognise.

# Contribution
If you find one that isn't included please take a few minutes to add it to sources.txt and create a pull request.
