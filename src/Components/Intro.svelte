<script>
    import { scrollTo, setGlobalOptions } from 'svelte-scrolling'

    setGlobalOptions({
        duration: 1000,
        offset: -100
    })
</script>

<div class="intro">
    <div class="intro__wrapper">
        <ul class="intro__content">
            <div use:scrollTo={"overview"}>Overview</div>
            <div use:scrollTo={"techStack"}>Tech stack</div>
            <div use:scrollTo={"education"}>Education</div>
            <div use:scrollTo={"experience"}>Experience</div>
            <div use:scrollTo={"myProjects"}>My projects</div>
            <div use:scrollTo={"hobies"}>Hobies</div>
            <div use:scrollTo={"contacts"}>Contacts</div>
        </ul>
        <span class="intro__line"></span>
        <h1 class="intro__title">
            Hello, I'm Yury <br>Software developer <br>from Belarus
        </h1>
    </div>
</div>

<style lang="scss">
    .intro {
        z-index: 10;
        &__wrapper {
            display: flex;
            flex-direction: row;
            justify-content: center;
        }
        &__content {
            display: flex;
            flex-direction: column;
            text-align: right;
            div {
                font-weight: 300;
                line-height: 1.6rem;
                font-size: 1.1rem;
                color: rgba(255, 255, 255, 0.7);
                transition: 0.3s all;
                &:hover {
                    transform: scale(1.1);
                    color: var(--mainClr);
                }
            }
        }
        &__line {
            display: block;
            background-color: var(--mainClr);
            width: 0.5rem;
            margin: 0 1rem;
        }
        &__title {
            padding: 0;
            color: #fff;
            font-size: 3rem;
            font-weight: 700;
            line-height: 3.7rem;
	    }
    }


    @media(max-width: 780px) {
        .intro {
            &__content {
                display: none;
            }
        }
    }

    @media(max-width: 550px) {
        .intro {
            &__title {
                font-size: 2.2rem;
                line-height: 2.7rem;
            }
        }
    }

    @media(max-width: 400px) {
        .intro {
            &__title {
                font-size: 1.7rem;
                line-height: 2.2rem;
            }
        }
    }
</style>