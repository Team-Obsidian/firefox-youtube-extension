# Rec-Collector
A quick, slapdash Firefox extension to keep a log of any YouTube video recommendations you encounter.

This simple project began because I wanted to brush up on my programming skills, but also because I think it would be cool to see how much the content I consume changes from year to year. I hope it becomes useful enough to publish eventually.

### Feature goals:
- <s>Pull YouTube videos IDs directly from network requests</s>
- Organize the videos into a CSV or JSON kept in local storage, attaching a timestamp and/or data about the video page it was recommended from
- Create a toolbar button to view any previously collected video profiles (for sorting or attaching notes) and a settings page
- Interact with YouTube API to populate relevant metadata(statically or dynamically) onto the collected data.
- Import/Export functionality
- Force Youtube to load new recommendations with Javascript so a minimum amount of recommendations can be stored per page
- Browse old videos in a simplified YouTube page mockup / Inject stored recommendations into the real website
- Integrate backups in cloud storage(Mega, Drive, DropBox, etc.) (?)
