<template>
    <div>
        <h1>Uh-oh!</h1>
        <h3>
            It looks like you are experiencing some network issues, please click
            the back button and try again
        </h3>
        <router-link :to="{ name: 'event-list' }"
            >Or go back to the Home page</router-link
        >
    </div>
</template>

<script>
export default {
    props: {
        resource: {
            type: String,
            required: true,
        },
    },
}
</script>
