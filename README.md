> [!NOTE]  
> This repository, originally located at `ZelnickB/cleanSITE`, is no longer actively maintained and has been archived. **The contents may contain bugs, security vulnerabilities, and other defects.**
>
> The terms of the [MIT License](LICENSE) continue to apply to the contents of this repository.

----

The worst part of using a website generator, such as *Weebly*, *Wordpress*, or *Google Sites* is that you have to pay to remove one of the ads placed at the bottom of your page.  
  
![Weebly Advertisement Image](https://image.ibb.co/gwO05S/image.png "An ad from the website generator Weebly that is placed at the bottom of free users' webpages")
  
CleanSite allows these ads to be removed for all viewers of the website as soon as the page loads. Most likely, the users of your site will not even see the ad.
  
# Benefits
* CleanSite uses a quick HTML `<script>` tag in the footer or body of your website (depending on your website generator) in order to disable ads
* Besides the CleanSite code, there are no traces of the ad left on the page, even in the "Inspect element" tool
* Easy to enable on your website
* No visible credit to the author is required–what's the point of removing one ad to add another?
* Multiple options allow for ads to be disabled on many popular webpage editors
* Completely open source–if you are using another website editor, you can use the code to create your own version of the program. Make sure to credit @ZelnickB on GitHub in your README document.
  
# Installation Notes
* See the [**Release Notes**](https://github.com/ZelnickB/cleanSITE/releases) for the latest release of the code to find the code to add to your webpage
* ***If possible***, paste the code into the **footer code** setting field of your webpage. *If you do not complete this step correctly, the code will not function. Code embedded in the body of a website will not function if the website editor has an option for footer code.* Technically speaking, the ad itself has to load before the JavaScript can get rid of it.
  
## Installation Code
### Weebly Installation Code
`<script src="https://zelnickb.github.io/cleanSITE/Scripts/Weebly.js"></script>`
  
**In order for the cleanSITE Weebly Version to function, the installation code must be inserted into the *footer code* of the entire website. On Weebly, this is under the *Settings > SEO* Menu.**
