<script lang='ts'>
    import {fly} from 'svelte/transition'
    import { page } from '$app/stores';
  import { quintIn, quintOut } from 'svelte/easing';
</script>

{#key $page.url}
    <div in:fly={{x: '-100%', duration: 700, easing: quintOut}} >
        <slot />
    </div>
{/key}