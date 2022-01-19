<script>
    const myExp = [
        {
            time: "2nd part of 2021 - current", 
            work: "Dive into backend development: TypeScript + Node.js.", 
            descr: "During this period, I decided fully focused on Backend-development and made several open-source APIs, which were successfully approved in public-apis repository  with 170k+ stars"},
        {
            time: "1st part of 2021", 
            work: "Started working with React.", 
            descr: "Throughout the time, many open-source web applications have been made that are available on my GitHub"
        },
        {
            time: "Late 2020", 
            work: "Made some websites on Freelance.",  
            descr: "Most interesting project is a sale landing page for country house"
        },
    ]
</script>

<div class="exp">
    {#each myExp as work}
        <div class="exp__item">
            <h3 class="exp__time">{work.time}</h3>
            <span class="exp__work">{work.work}</span>
            <div class="exp__descr">{work.descr}</div>
        </div>
    {/each}
</div>

<style lang="scss">
    .exp {
        color: #fff;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        &__item {
            padding: 1rem;
            width: 100%;
        }
        &__time {
            font-size: 1.4rem;
            font-weight: 500;
            margin-bottom: 0.5rem;
        }
        &__work {
            color: var(--mainClr);
            font-size: 1.2rem;
            font-weight: 400;
        }
        &__descr {
            margin-top: 0.5rem;
            font-size: 1.2rem;
            font-weight: 400;
        }
    }
</style>