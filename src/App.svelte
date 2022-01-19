<script>	
	import Intro from './Components/Intro.svelte'
	import Subtitle from './Components/Subtitle.svelte'
	import TextBlock from './Components/TextBlock.svelte'
	import TechStack from './Components/TechStack.svelte'
	import MyProjects from './Components/MyProjects.svelte';
	import Experience from './Components/Experience.svelte'
	import Socials from './Components/Socials.svelte'
	import Education from './Components/Education.svelte'
</script>


<main>
	<Intro/>
</main>
<section class="info">
	<div class="container">
		<Subtitle link={"overview"}>Overview</Subtitle>
		<TextBlock>
			I'm a Full Stack Developer with expertise in building powerful and scalable backend APIs, progressive web apps and different useful tools. I have been programming for over a year in a variety of technologies using JavaScript.
			<br> <br>
			My journey as a developer began with JavaScript. Since the main use of this language is to develop web applications, knowledge of markup languages is essential. This knowledge enabled me to learn the UI frameworks with ease.
			<br> <br>
			At the moment I'm focusing on developing the backend part of web applications. This area sparked my interest and I immersed myself in it with great enthusiasm. My main tool is the Nest.js framework. 
		</TextBlock>

		<Subtitle link={"techStack"}>Tech stack</Subtitle>
		<TextBlock>
			I am not stopping to improve myself, so I am learning more and more new techniques <span id="highlight">#learneveryday</span>
		</TextBlock>
		<TechStack/>

		<Subtitle link={"education"}>Education</Subtitle>
		<Education/>

		<Subtitle link={"experience"}>Experience</Subtitle>	
		<TextBlock></TextBlock>
		<Experience/>

		<Subtitle link={"myProjects"}>My projects</Subtitle>
		<TextBlock></TextBlock>
		<MyProjects/>

		<Subtitle link={"hobies"}>Hobies</Subtitle>
		<TextBlock>
			<span id="highlight">Workout</span>
			<br>
			Even at the age of 16, I firmly decided to take up sports in order to be in good physical shape. Since then, I have been doing physical exercises almost every day, distributing controls to all parts of the body.
			<br> <br>
			<span id="highlight">Cycling</span>
			<br>
			A bicycle is the main means of transportation around the city for me. I had several different bikes, but eventually I put together my own custom track bike - lightweight, simple and fast. I love to take a ride after a productive working day!
			<br> <br>
			<span id="highlight">Digital art</span>
			<br>
			One of the first programmes I learned was Abobe Photoshop. Over many years of practice I've become quite proficient at working with photos, from creating presentations and layouts for applications, to photobashing and 3D manipulation. I even have an Instagram page where I share my creativity.
			<br> <br>
			<span id="highlight">Books</span>
			<br>
			Not so long ago I discovered the wonderful world of literature, with so much really interesting and unique information, that I no longer have time for social media.
		</TextBlock>

		<Subtitle link={"contacts"}>Contacts</Subtitle>
		<TextBlock>
			If you interested in my job or you have any questions, please contact me by email:
			<a href = "mailto: yury.swiderko@gmail.com" class="email">yury.swiderko@gmail.com</a>
		</TextBlock>
		<TextBlock>
			For everything else visit my socials:
		</TextBlock>
		<Socials/>

	</div>
</section>
<footer>

</footer>

<style lang="scss">
	#highlight {color: var(--mainClr)}

	main {
		width: 100%;
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: url("../assets/background.png") center (center/cover) no-repeat;
		background-color: #000;
		padding-bottom: 3rem;
	}

	.info {
		padding: 5rem 1rem;
		background-color: #000;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
	}

	.email {
		margin: 0 auto;
		text-decoration: none;
		font-size: 1.4rem;
		font-weight: 500;
		color: var(--mainClr);
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>