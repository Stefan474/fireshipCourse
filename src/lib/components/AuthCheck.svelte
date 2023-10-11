<script lang="ts">
    import { user } from "$lib/firebase";
</script>
  
{#if $user}
  <slot />
{:else}
    <p class="text-error mx-auto">
        You must be signed in to view this page.<br>
        
    </p>
    <a class="btn btn-primary mx-auto mt-3" href="/login">Sign in</a>
{/if}