<script context="module">
	export function preload() {
		return this.fetch(`blog.json`)
			.then(r => r.json())
			.then((posts) => {
				return { 
					posts: posts 
				};
			});
	}
</script>

<script>
	import BlogPosts from "../../components/blog/BlogPosts.svelte";	
	export let posts;
</script>

<style>

</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>The first post</h1>

<BlogPosts {posts} />

