# Steps to install dependency
#### For client

<span style="color:#c00000">Command to clone this repo</span>
```
git clone https://github.com/danisherror/Hostel_management.git
```

<span style="color:#c00000">Command to download the frontend dependencies:</span>
```
npm install --legacy-peer-deps
```
#### For server

<span style="color:#c00000">Command to download the backend dependencies:</span>
```
npm install
```

# Steps to run the project:
#### For client

```
npm run dev
```
#### For server
```
npm start
```
---
---
# Results

## Home Page
![[Pasted image 20240430234811.png]]
![[Pasted image 20240430234852.png]]
![[Pasted image 20240430234831.png]]
![[Pasted image 20240430234936.png]]

## Student Page
![[Pasted image 20240430235038.png]]
![[Pasted image 20240430235055.png]]
![[Pasted image 20240430235116.png]]
![[Pasted image 20240430235158.png]]
![[Pasted image 20240430235249.png]]
![[Pasted image 20240430235305.png]]
![[Pasted image 20240430235325.png]]
![[Pasted image 20240430235419.png]]
![[Pasted image 20240430235435.png]]

## Admin Page
![[Pasted image 20240430235631.png]]
![[Pasted image 20240430235648.png]]
![[Pasted image 20240430235701.png]]
![[Pasted image 20240430235728.png]]
![[Pasted image 20240430235745.png]]
![[Pasted image 20240430235801.png]]
![[Pasted image 20240430235815.png]]
![[Pasted image 20240430235833.png]]
![[Pasted image 20240430235849.png]]
![[Pasted image 20240430235927.png]]
![[Pasted image 20240430235952.png]]
![[Pasted image 20240501000018.png]]
![[Pasted image 20240501000053.png]]
![[Pasted image 20240501000119.png]]
![[Pasted image 20240501000139.png]]
![[Pasted image 20240501000156.png]]

---
---
# Documentation for the Project
---
---

## Overall Design For Home Page

###### There are mainly three main things in the home page design:
- Navbar
- Sidebar
- Content in Home Page

### Navbar

#### Enable or Disable Navbar
- Go to Layout Folder in the src of the client folder
- After that go to `HomePage.tsx` file
- Do the changes in this according to you:
	- ![[Pasted image 20240430225918.png]]

#### Change the Logo
- Go to images folder in src of the client folder
- After that go to logo folder
- change the `logo.png` file

- If you want to change the logo size
	- Go to Components folder in the src of the client folder
	- After that go to Header folder
	- Go to `homeindex.tsx` page
	- Change the code according to you:
		- ![[Pasted image 20240430230607.png]]

#### Add or Remove the Navigation Items

- Go to Components folder in the src of the client folder
- After that go to Header folder
- Go to `homeindex.tsx` page
- I have created the items inside this div
	- `<div className="hidden sm:block"> </div>`
- Comment or create the new item similar to it
	- ![[Pasted image 20240430231225.png]]

#### Change the Background color of Nav Bar
- Go to Components folder in the src of the client folder
- After that go to Header folder
- Go to `homeindex.tsx` page
- currently i have blue color as light mode and pink at dark mode
	- Change the theme according to you.
	- ![[Pasted image 20240430231814.png]]
- Change the color when you hover the items in the navbar
	- currently i have pink in light mode and blue in dark mode
	- change the theme according to you
	- ![[Pasted image 20240430232201.png]]


### Side Bar

#### Enable or Disable Navbar
- Go to Layout Folder in the src of the client folder
- After that go to `HomePage.tsx` file
- Do the changes in this according to you:
	- ![[Pasted image 20240430231405.png]]

#### All other things are similar to nav bar

### Content in Home Page

#### Change the background of the content page
- Go to Layout Folder in the src of the client folder
- After that go to `HomePage.tsx` file
- Do the changes in this according to you:
	- Currently i have white background at light theme and blue at dark theme
	- ![[Pasted image 20240430232552.png]]

### Pages in Home Page
- Dashboard -> `client\src\pages\Dashboard\HomePage.tsx`
- sign in -> `client\src\pages\Authentication\SignIn.tsx`
- sign up -> `client\src\pages\Authentication\SignUp.tsx`
- other pages -> `client\src\HomePage`


