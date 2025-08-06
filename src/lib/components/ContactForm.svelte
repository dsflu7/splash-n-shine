<script lang="ts">
	import { onMount } from 'svelte';
	
	let formLoaded = $state(false);
	let scriptLoaded = $state(false);
	
	onMount(() => {
		// Use intersection observer to load form when it comes into view
		const observer = new IntersectionObserver((entries) => {
			if (entries.length > 0 && entries[0].isIntersecting && !scriptLoaded) {
				loadFormScript();
				observer.disconnect();
			}
		}, { threshold: 0.1 });
		
		const formContainer = document.getElementById('contact-form-container');
		if (formContainer) {
			observer.observe(formContainer);
		}
		
		return () => observer.disconnect();
	});
	
	function loadFormScript() {
		if (scriptLoaded) return;
		
		const script = document.createElement('script');
		script.src = 'https://link.msgsndr.com/js/form_embed.js';
		script.async = true;
		script.defer = true;
		script.onload = () => {
			scriptLoaded = true;
			// Small delay to ensure script is ready
			setTimeout(() => {
				formLoaded = true;
			}, 500);
		};
		document.head.appendChild(script);
	}
</script>

<div id="contact-form-container" class="flex h-full w-full flex-col items-center justify-center *:w-full">
	<p class="text-center text-sm">
		If the form below doesn't load, please click <a
			class="italic underline"
			href="https://api.leadconnectorhq.com/widget/form/iqHTKrAbOOGjMJuQrvYW">here</a
		>
	</p>

	{#if formLoaded}
		<iframe
			src="https://api.leadconnectorhq.com/widget/form/iqHTKrAbOOGjMJuQrvYW"
			style="width:100%;height:100%;border:none;border-radius:3px"
			id="inline-iqHTKrAbOOGjMJuQrvYW"
			data-layout={"{'id':'INLINE'}"}
			data-trigger-type="alwaysShow"
			data-trigger-value=""
			data-activation-type="alwaysActivated"
			data-activation-value=""
			data-deactivation-type="neverDeactivate"
			data-deactivation-value=""
			data-form-name="Website Form"
			data-height="1179"
			data-layout-iframe-id="inline-iqHTKrAbOOGjMJuQrvYW"
			data-form-id="iqHTKrAbOOGjMJuQrvYW"
			title="Website Form"
		></iframe>
	{:else}
		<div class="flex items-center justify-center h-64 bg-muted rounded-lg">
			<div class="text-center">
				<div class="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
				<p class="text-sm text-muted-foreground">Loading contact form...</p>
			</div>
		</div>
	{/if}
</div>
