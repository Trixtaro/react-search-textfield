# React Search Textfield

React component that works like a search text field, when user is typing, options will be displayed. Vanila React, no extra dependencies.

## How to use it

Here is an example of implemention of the component:

    function App() {
        const [value, setValue] = useState<string>("");

        return (
            <div className="App">
                <SearchTextField
                    items={["Item 1", "Item 2", "Item 3"]}
                    onChange={(e) => setValue(e.target.value)}
                    onClickItem={(selectedItem: string) => setValue(selectedItem)}
                    name={"input"}
                    value={value}
                    inputStyles={{ width: "200px" }}
                    itemStyles={{ textAlign: "left" }}
                />
            </div>
        );
    }

**SearchTextField** has some props that help developer to customize this component:

- **items**: Options that user see when is typing inside the textfield. This field should be an array of strings.
- **onChange**: This prop receive a callback that it will be executed each time user changes the value of the text field.
- **onClickItem**: This prop receive a callback that il will be executed when user clicks on one of the options.
- **name**: This is the name of the text field. This prop affects the value of _event.target.name_ in the callback parameter of **onChange** prop.
- **value**: It's the value of the text field.
- **inputStyles**: This prop can override the styles of the text field. You could use an empty object if you wish.
- **itemStyles**: This prop can override the styles of each option that will be displayed when user is typing inside the text field. You could use an empty object if you wish.

### Recommendations and comments

If you have a recommendation, you can make an issue on GitHub repository: [react-search-textfield repository](https://github.com/Trixtaro/react-search-textfield)

Feel free to collaborate in this project making a PR or request to be a collaborator of the repository.
