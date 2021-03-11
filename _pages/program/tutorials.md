---
title: Tutorials
hide_title: true
layout: single
excerpt: "EACL 2021 Tutorials."
permalink: /program/tutorials/
sidebar:
  nav: program
toc_label: "&nbsp;On this page"
toc: false
toc_sticky: true
---

# Welcome to the Tutorials Session of EACL 2021

<p>
  The 2021 EACL tutorials session includes courses on a variety of topics reflecting recent advances in Natural Language Processing methods and applications, specially selected to give conference attendees comprehensive overviews ranging from introductory to cutting-edge topics targeted to a wide audience and presented by experts from academia and industry.
</p>

<div class="collapse" markdown="0">
  <button class="expand-button simple-link">Read more</button>
  <div class="collapse-content">
    <p>
      This year, continuing the tradition of the past few years, the call, submission, reviewing and selection of tutorials were coordinated jointly for multiple conferences: EACL, NAACL-HLT, ACL-IJCNLP and EMNLP. The reviewing committee consisted of 19 members, namely the tutorial chairs of the above- mentioned conferences (Isabelle Augenstein and Ivan Habernal for EACL, Greg Kondrak and Kalina Bontcheva for NAACL-HLT, David Chiang and Min Zhang for ACL-IJCNLP and Jing Jiang and Ivan Vulic ́ for EMNLP). Each proposal received two reviews, and was evaluated for clarity, preparedness, novelty, timeliness, instructors’ experience, likely audience, open access to the teaching materials, diversity (multilingualism, gender, age and geolocation) and the compatibility of preferred venues. Out of the 34 tutorial submissions received, 5 were selected for presentation at EACL.
    </p>
    <p>
      We solicited two types of tutorials, including cutting-edge and introductory themes. Out of the 5 tutorials accepted to EACL, 3 are introductory and 2 are cutting-edge tutorials, all reflecting current topics of interest to the community. The introductory tutorials offer overviews of unsupervised parsing, learning from multiple annotators, and on peer review of NLP research. The cutting-edge tutorials present research on methods for speech translation and unsupervised neural machine translation.  
    </p>
    <p>
      We would like to thank the NAACL-HLT, ACL-IJCNLP and EMNLP tutorial chairs, along with the members of the reviewing committee, who all collaborated to ensure a smooth selection process. Our thanks to the conference organisers for an effective and smooth collaboration, and in particular to the general chair Paola Merlo, the program chairs Jorg Tiedemann and Reut Tsarfaty, the publication chairs Valerio Basile and Tommaso Caselli, and the local chairs Viktoria Kolomiets, Dmytro Lider, Iryna Kotkalova, Oleksii Molchanovskyi and Oles Dobosevych. Finally, our thanks goes to the tutorial authors for sending in their tutorial proposals, and for their flexibility and collaboration in a period of adaption to virtual conferences.  
    </p>
    <p>
      We hope you enjoy the tutorials.  
    </p>
    <p>
      <em>
        EACL 2021 Tutorial Co-chairs<br/>
        Isabelle Augenstein<br/>
        Ivan Habernal<br/>
      </em>
    </p>
  </div>
  <button class="collapse-button simple-link">Show less</button>
</div>

## Unsupervised Natural Language Parsing (Introductory Tutorial)

_Kewei Tu, Yong Jiang, Wenjuan Han, Yanpeng Zhao_

Unsupervised parsing learns a syntactic parser from training sentences without parse tree annotations. Recently, there has been a resurgence of interest in unsupervised parsing, which can be attributed to the combination of two trends in the NLP community: a general trend towards unsupervised training or pre-training, and an emerging trend towards finding or modeling linguistic structures in neural models.

In this tutorial, we will introduce to the general audience what unsupervised parsing does and how it can be useful for and beyond syntactic parsing. We will then provide a systematic overview of major classes of approaches to unsupervised parsing, namely generative and discriminative approaches, and analyze their relative strengths and weaknesses. We will cover both decade-old statistical approaches and more recent neural approaches to give the audience a sense of the historical and recent development of the field. We will also discuss emerging research topics such as BERT-based approaches and visually grounded learning.

## [Aggregating and Learning from Multiple Annotators](https://sites.google.com/view/alma-tutorial)

_Silviu Paun, Edwin Simpson_

The success of NLP research is founded on high-quality annotated datasets, which are usually obtained from multiple expert annotators or crowd workers. The standard practice to training machine learning models is to first adjudicate the disagreements and then perform the training. To this end, there has been a lot of work on aggregating annotations, particularly for classification tasks. However, many other tasks, particularly in NLP, have unique characteristics not considered by standard models of annotation, e.g., label interdependencies in sequence labelling tasks, unrestricted labels for anaphoric annotation, or preference labels for ranking texts. In recent years, researchers have picked up on this and are covering the gap. A first objective of this tutorial is to connect NLP researchers with state-of-the-art aggregation models for a diverse set of canonical language annotation tasks. There is also a growing body of recent work arguing that following the convention and training with adjudicated labels ignores any uncertainty the labelers had in their classifications, which results in models with poorer generalisation capabilities. Therefore, a second objective of this tutorial is to teach NLP workers how they can augment their (deep) neural models to learn from data with multiple interpretations.

## End-to-End Speech Translation

_Jan Niehues, Elizabeth Salesky, Marco Turchi, Matteo Negri_

Speech translation is the translation of speech in one language typically to text in another, traditionally accomplished through a combination of automatic speech recognition and machine translation. Speech translation has attracted interest for many years, but the re- cent successful applications of deep learning to both individual tasks have enabled new opportunities through joint modeling, in what we today call ‘end-to-end speech translation.’

In this tutorial, we will introduce the techniques used in cutting-edge research on speech translation. Starting from the traditional cascaded approach, we will give an overview of data sources and model architectures to achieve state-of-the-art performance with end-to-end speech translation for both high- and low-resource languages. In addition, we will discuss methods to evaluate analyze the proposed solutions, as well as the challenges faced when applying speech translation models for real-world applications.

## Reviewing Natural Language Processing Research

_Kevin Cohen, Karën Fort, Margot Mieskes, Aurélie Névéol, Anna Roger_

The reviewing procedure has been identified as one of the major issues in the current situation of the NLP field. While it is implicitly assumed that junior researchers learn reviewing during their PhD project, this might not always be the case. Additionally, with the growing NLP community and the efforts in the context of widening the NLP community, researchers joining the field might not have the opportunity to practise reviewing. This tutorial fills in this gap by providing an opportunity to learn the basics of reviewing. Also more experienced researchers might find this tutorial interesting to revise their reviewing procedure.

## Advances and Challenges in Unsupervised Neural Machine Translation

_Rui Wang, Hai Zhao_

Unsupervised cross-lingual language representation initialization methods, together with mechanisms such as denoising and back-translation, have advanced unsupervised neural machine translation (UNMT), which has achieved impressive results. Meanwhile, there are still several challenges for UNMT. This tutorial first introduces the background and the latest progress of UNMT. We then examine a number of challenges to UNMT and give empirical results on how well the technology currently holds up.

[Check out the booklet with extended tutorial abstracts.]({{ '/downloads/EACL2021-Tutorial-abstracts.pdf' | relative_url }})
