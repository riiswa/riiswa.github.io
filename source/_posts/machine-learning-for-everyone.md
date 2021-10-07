---
layout: article
title: L'apprentissage automatique, simplement et avec des exemples concrets.
date: 2021-10-07 15:45:21
tags:
---

L'apprentissage automatique (ou "machine learning" en anglais) c'est comme le sexe au lycée. Tout le monde en parle, quelque uns savent ce qu'il faut faire et seul les professeurs le font. Si vous avez déjà essayé de lire des articles à propos du l'apprentissage automatique sur Internet, vous tomberez sur deux types de contenu : de grosses trilogies académiques remplie de théorèmes (je n'ai même pas pu en comprendre la moité) ou des contes de fées douteux sur *l'intelligence artificielle*, *la magie de la science des données* et *les métiers du futurs*.

J'ai décidé d'écrire un article dont je souhaitais l'existence depuis longtemps. Une introduction simple pour ceux qui ont toujours voulu comprendre l'apprentissage automatique. Avec des problèmes concrets, des solutions pratiques, un langage simple et sans théorèmes de haut niveau. Un et pour tous. Que vous soyez développeur ou manager.

C'est parti.

<img alt="Les deux types d'articles sur le machine learning" src="/images/machine-learning-for-everyone/01.jpg">

## Pourquoi voulons-nous que les machines apprennent ?

Voici Billy. Billy veut acheter une voiture. Il essaye de calculer combien il doit économiser par moi pour ça. Il a parcouru des dizaines d'annonces sur Internet et a appris que les voitures neuves coûtent environ 20 000 dollars, les voitures d'occasion d'un an 19 000 dollars, celles de deux ans 18 000 dollars et ainsi de suite.

Billy, notre brillant analyste, commence à observer un schéma : *le prix de la voiture dépend de son âge et baisse de 1 000 dollars chaque année, mais ne descend pas en dessous de 10 000 dollars.*

En termes d'apprentissage automatique, Billy a inventé la *regression* - il a prédit une valeur (le prix) par rapport à des données connus. Les gens le font tout le temps, quand ils essayent d'estimer un prix raisonnable pour un iPhone d'occasion sur eBay ou de déterminer combien de côtes à acheter pour une soirée barbecue. 200 grammes par personnes ? 500 ?

Oui, ce serait cool d'avoir une formule simple pour tous les problèmes du monde. En particulier, pour une soirée barbecue. Malheureusement, c'est impossible.

Revenons aux voitures. Le problème est qu'elles ont des dates de fabrication différentes, plein d'options, des conditions techniques, des pics de demande saisonnier et Dieu seul sait combien de facteurs cachées il y a en plus. Un Billy moyen ne peut pas garder toutes ces données en tête lorsqu'il calcule le prix. Moi aussi.

Les gens sont stupides et paresseux - nous avons besoin de robots pour faire des maths à leurs places. Alors, utilisons la méthode informatique. Donnons à la machine des données et demandons-lui de trouver tous les modèles cachés lié au prix.

Et ça fonctionne !! Ce qu'il y a de plus excitant est que la machine fait cette tâche bien mieux qu'une vraie personne qui analyse soigneusement toutes les dépendances de son esprit.

C'était la naissance de l'apprentissage automatique.