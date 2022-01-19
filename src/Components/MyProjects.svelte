<script>
    const myProjects = [
        {
            name: "Classify", 
            type: "Public API", 
            descr: "An open source project for enrypting text messages", 
            link: "cheatsnake/classify"
        },
        {name: 
            "xColors", 
            type: "Public API", 
            descr: "A free API for generating & converting colors", 
            link: "cheatsnake/xColors-api"
        },
        {
            name: "xMath", 
            type: "Public API", 
            descr: "A free API for generating random mathematical expressions", 
            link: "cheatsnake/xMath-api"
        },
        {
            name: "EmojiHub", 
            type: "Public API", 
            descr: "A simple & free service with emojis for your cool apps", 
            link: "cheatsnake/emojihub"
        },
        {
            name: "Mind math", 
            type: "Web app", 
            descr: "An application for training oral counting build on React", 
            link: "cheatsnake/MindMath"
        },
        {
            name: "CheatJS", 
            type: "Project", 
            descr: "High quality cheatsheets for JavaScript environment", 
            link: "cheatjs/cheat"
        },
        {
            name: "Typing race", 
            type: "Web app", 
            descr: "Minimalistic web app for training touch typing", 
            link: "cheatsnake/TypingRace"
        },
    ]
</script>

<div class="projects">
    {#each myProjects as project}
        <a href="https://github.com/{project.link}" class="projects__item">
            <h3 class="projects__title">{project.name}</h3>
            <span class="projects__type">{project.type}</span>
            <div class="projects__descr">{project.descr}</div>
        </a>
    {/each}
</div>

<style lang="scss">
    .projects {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        &__item {
            position: relative;
            border-left: 4px solid var(--mainClr);
            background-color: #1c1c1c;
            color: #fff;
            width: 280px;
            text-decoration: none;
            padding: 1rem;
            transition: 0.3s all;
            &:hover {
                transform: scale(1.03);
            }
        }
        &__title {
            font-weight: 500;
            font-size: 1.4rem;
        }
        &__type {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-weight: 300;
            font-size: 0.9rem;
        }
        &__descr {
            margin-top: 1rem;
            font-weight: 400;
            font-size: 1rem;
        }
    }
</style>