# Universal Plugin Repo
### Monolithic/Universal plugin repository for Jellyfin Media Server

> [!NOTE]
> Updated every 24 hours, or when a change is pushed to this project

> [!CAUTION]
> Some plugins require further configuration or software so be sure to read the respective READMEs to ensure they work correctly

# Up to 3x faster catalogue loading 
`(tested on server with gigabit connection, client with 10mbps download from server)`

Before: 12 seconds to load items 3 seconds to load images, 5-6 seconds with cache<br>
After: 4 seconds to load items 1 second to load images, 1-2 seconds with cache

# Installation
1. Open Jellyfin dashboard
2. Naviage to to catalogue settings
3. (Optional) Remove all old repositories including the default jellyfin, this speeds up catalogue loading
4. Add the universal repository
```
https://raw.githubusercontent.com/0belous/universal-plugin-repo/refs/heads/main/manifest.json
```
4. Never add another repository again!


# Contribution
I alone can't find evey repository out there!

So please, if you find one that isn't included please take a few minutes to add it to sources.txt and create a pull request.
