<script>
    const techStack = [
        {name: "TypeScript", url: "https://www.typescriptlang.org/"},
        {name: "NodeJS", url: "https://nodejs.org/"},
        {name: "ExpressJS", url: "https://expressjs.com/"},
        {name: "MongoDB", url: "https://www.mongodb.com/"},
        {name: "NestJS", url: "https://nestjs.com/"},
        {name: "React", url: "https://reactjs.org/"},
        {name: "Sass", url: "https://sass-lang.com/"},
        {name: "Svelte", url: "https://svelte.dev/"},
        {name: "Git", url: "https://git-scm.com/"},
    ]

</script>


<div class="techstack">
    <div class="techstack__wrapper">
        {#each techStack as item}
            <a href={item.url} class="techstack__item">
                <img src="../assets/techstack/{item.name}.png" alt={item.name}>
            </a>
        {/each}
    </div>
</div>

<style lang="scss">
    .techstack {
        padding: 1rem 0;
        &__wrapper {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        &__item {
            text-decoration: none;
            opacity: 0.8;
            transition: 0.3s all;
            img {
                width: 100px;
                height: 100px;
            }
            &:hover {
                transform: scale(1.1);
                opacity: 1;
            }
        }
    }
</style>