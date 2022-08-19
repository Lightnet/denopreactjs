
# information:
Note using the ThreejsContext Provider to share objects for use in viewport sync.
But can't used out the current tab browser required some network setup.

Notes:
- init set up for signal as there null and set when setup is done as listen to variable changes.

-Top
-Side
-Camera

```
ThreejsContext.Provider
-eObject3Ds

  -ThreeCanvas Top
    -get eObject3Ds

  -ThreeCanvas Camera
    -get eObject3Ds
```

```
init set up
when rerender setup is finish send state scene objects.
object listen to init setup.
-note did not check for map jsx init.


```