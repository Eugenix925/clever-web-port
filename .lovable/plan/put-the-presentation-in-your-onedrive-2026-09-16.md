# Put the presentation in your OneDrive

Goal: get `Akonaho-Ralinala-Portfolio-Presentation.pptx` into your Microsoft OneDrive so you can open and edit it in PowerPoint online.

## What happens

1. A connect card appears in chat for Microsoft OneDrive. You sign in with your Microsoft account and approve access.
2. The presentation file is uploaded straight into the root of your OneDrive.
3. You get the file name to look for; opening it from OneDrive launches PowerPoint online, and the desktop app can open it too.

## Notes

- This only uploads this one file. Nothing else in your OneDrive is touched.
- If you'd rather not sign in, the alternative stays: download the file from the chat card and double-click it on your computer.
- Still outstanding for your submission: the live site link to replace the placeholder on the last slide, and a look through the slides for any cramped spacing.

## Technical detail

Upload via the Microsoft OneDrive connector gateway using a simple `PUT` to `/me/drive/root:/Akonaho-Ralinala-Portfolio-Presentation.pptx:/content` (file is ~1 MB, well under the 4 MB simple-upload limit). No app code changes.
