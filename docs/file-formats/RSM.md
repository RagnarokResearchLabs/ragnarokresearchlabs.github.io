---
slug: /file-formats/rsm
title: RSM
---

This document describes the RSM file format used in the Ragnarok Online client (and Arcturus).

## Contents

RSM files store 3D models as a transformation hierarchy consisting of one or multiple transformation nodes:

- The primary contents are geometry and transformations for the various [meshes](https://en.wikipedia.org/wiki/Polygon_mesh) that make up the model
- Also included is animation data in the form of [keyframes](https://docs.blender.org/manual/en/latest/animation/keyframes/introduction.html), which can be interpolated at runtime by the client
- There's some debate about the exact layout of older versions, but the fields in question appear to be unused

The format has undergone major changes at some point after the [Renewal update](https://irowiki.org/wiki/Renewal), so two rather different versions exist.
