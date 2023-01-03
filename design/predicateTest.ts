{{
    interface Predicate{
        condition: string,
        entity: string,
        predicate: {
            equipment: {
                mainhand: {
                    items: string[]
                }
            }
        }
    } 

    function predicate(location: string) {
        return (predicate: Predicate) => {
        
        }
    }
}}

{{

    predicate("foo:bar/test")({
        condition: "minecraft:entity_properties",
        entity: "this",
        predicate: {
            equipment: {
                mainhand: {
                    items: [
                    "minecraft:golden_axe"
                    ]
                }
            },
        }
    })


}}
predicate foo:bar/test {
        
}