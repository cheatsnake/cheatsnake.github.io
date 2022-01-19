<script>
    import { scrollRef } from 'svelte-scrolling'
    export let link;
</script>

<h2 use:scrollRef={link} class="subtitle" id={link}>
    <span>#</span><slot></slot>
</h2>

<style lang="scss">
    .subtitle {
        margin-top: 15rem;
        color: #fff;
        font-weight: 700;
        font-size: 2.2rem;
        span {
            color: var(--mainClr);
        }
    }
</style>