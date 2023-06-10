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
            FitEddy
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning" viewBox="0 0 16 16">
  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
</svg> 2022
        </div>

    </template>

    Site crée lors de mon stage de première année avec l’architecture MVC (Model, Vues, Controllers). Il permet pour les utilisateurs de consulter les activités sportives sur le site en se renseignant sur les détails de chaque entrainement. Les administrateurs peuvent ajouter modifier et supprimer les entrainements qu'ils veulent.    <br /> <br />
    Source :     <a href="about:blank" target="_blank" rel="noopener">Github</a>
    <br /> <br />
    Stack : HTML / CSS / PHP
  </WelcomeItem>

  <WelcomeItem>
    <img alt="Vue logo" class="logo" src="@/assets/mvc.png" :style="{ width: '100%',borderRadius:'10%'  }"/>

  </WelcomeItem>









</template>
