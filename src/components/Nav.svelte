<script>
	export let segment;
</script>

<style>
	nav {
		display: flex;
		position: relative;
		border-bottom: 1px solid #2f3b54; /*#6679a4; */
		font-weight: 300;
		padding: 0 1em;
	}

	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	nav::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: inline-block;
		clear: left;
	}

	a {
		color: #D7DCE2;
	}

	h3 {
		font-family: menlo, inconsolata, monospace;
		text-align: center;
		position: absolute;
		top: 50%;
		left: 50%;
    	margin-right: -50%;
		transform: translate(-50%, -50%)	
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 2px;
		background-color: rgb(255,62,0);
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}

	@media (max-width: 400px) {
	h3 {
		text-align: right;
		font-size: 12px;
		position: absolute;
		right: 0px;		
		top: 8px;
    	margin-right: 14px;
		transform: translate(0, 50%);
	}	
}
</style>

<nav>
	<ul>
		<li><a aria-current="{segment === undefined ? 'page' : undefined}" href=".">home</a></li>
		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch aria-current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li>

	</ul>
	<h3 class="title">THE CODE APPRENTICE</h3>
</nav>
