<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
        <div class="green">
            Portfolio React

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
<path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
</svg> 2023
        </div>

    </template>
    Portfolio fait durant ma deuxième année de stage: utilisant le framework React pour exploiter mes premières connaissances sur React

<br /> <br />
    Source :     <a href="https://github.com/EddyBang/EddyBang.github.io" target="_blank" rel="noopener">Github</a>
    <br />
    Lien vers la page : <a href="https://eddybang.github.io" target="_blank" rel="noopener">Site</a>
    <br /><br />
    Stack : JSX / SCSS / SASS 
  </WelcomeItem>

  <WelcomeItem>
    <img alt="Vue logo" class="logo" src="@/assets/portfolioreact1.png" :style="{ width: '105%',borderRadius:'10%'  }"/>
<br /><br />
    <img alt="Vue logo" class="logo" src="@/assets/portfolioreact3.png" :style="{ width: '105%',borderRadius:'10%'  }"/>

  </WelcomeItem>









</template>
