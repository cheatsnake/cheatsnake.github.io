<script>
    let mySocials = [
        {
            name: "GitHub", link: "https://github.com/cheatsnake", img: "../assets/socials/GitHub.png"
        },
        {
            name: "Instagram", link: "https://www.instagram.com/yurace_", img: "../assets/socials/Insta.png"
        },
        {
            name: "Twitter", link: "https://twitter.com/yurace_", img: "../assets/socials/Twitter.png"
        },
    ]
</script>

<div class="socials">
    {#each mySocials as social}
        <a href={social.link} class="socials__link">
            <img src={social.img} alt={social.name} class="socials__img">
        </a>
    {/each}
</div>

<style lang="scss">
    .socials {
        margin-top: 1.5rem;
        display: flex;
        justify-content: center;
        gap: 1rem;
        &__link {
            text-decoration: none;
            transition: 0.3s all;
            &:hover {
                transform: scale(1.1);
            }
        }
        &__img {
            width: 40px;
            height: 40px;
        }
    }
</style>