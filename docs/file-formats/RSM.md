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

## Features

## Layout

### Versions

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


<Tabs>
<TabItem value="1.4" label="Version 1.4">

```cpp title="RSM File Format (v1.4)"
struct RagnarokRSM {
    char Signature[3];
    uint8_t VersionMinor;
    uint8_t VersionMajor;
    uint16_t AnimationClipCount;
    uint8_t UnusedHeaderField[10];
    struct AnimationClip AnimationClips[AnimationClipCount];
};
```

</TabItem>
</Tabs>

## References

Multiple open-source RSM decoders exist:

- [GPL-licensed implementation in JavaScript (RoBrowser)](https://github.com/MrAntares/roBrowserLegacy/blob/master/src/Loaders/Model.js)
- [MIT-licensed implementation in Rust (Korangar)](https://github.com/vE5li/korangar/blob/main/src/loaders/model/mod.rs)
- [MPL-licensed implementation in LuaJIT (RagLite SDK)](https://github.com/RagnarokResearchLab/RagLite/blob/main/Core/FileFormats/RagnarokRSM.lua)

This list only includes actively-maintained versions; [various other community projects](/community-projects) may also be of interest.