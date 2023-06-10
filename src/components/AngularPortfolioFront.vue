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

            
            AndroidSicilylines
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-android" viewBox="0 0 16 16">
<path d="M2.76 3.061a.5.5 0 0 1 .679.2l1.283 2.352A8.94 8.94 0 0 1 8 5a8.94 8.94 0 0 1 3.278.613l1.283-2.352a.5.5 0 1 1 .878.478l-1.252 2.295C14.475 7.266 16 9.477 16 12H0c0-2.523 1.525-4.734 3.813-5.966L2.56 3.74a.5.5 0 0 1 .2-.678ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
</svg> 2023
        </div>

    </template>

    J'ai choisi de créer ce portfolio sur le thème de Debian en raison de mon intérêt pour son système d'exploitation. Mon objectif principal était d'en apprendre davantage sur Angular, c'est pourquoi j'ai décidé de réaliser ce projet.
    <br /><br />
    Source :     <a href="https://github.com/BanggEddy/AngularPortfolioGit" target="_blank" rel="noopener">Github</a>
    <br /> <br />
    Stack : Angular / CSS / HTML
  </WelcomeItem>

  <WelcomeItem>
    <img alt="Vue logo" class="logo" src="@/assets/angularpage.png" :style="{ width: '100%',borderRadius:'10%'  }"/>
    <br /><br />
    <img alt="Vue logo" class="logo" src="@/assets/angularpage1.png" :style="{ width: '100%',borderRadius:'10%'  }"/>
    <br /><br />
    <img alt="Vue logo" class="logo" src="@/assets/angularpage2.png" :style="{ width: '100%',borderRadius:'10%'  }"/>

  </WelcomeItem>









</template>
