# React vs Context API

This is a practice to learn the difference between redux and context api.  
The original code from https://github.com/academind/react-redux-vs-context/tree/redux  
Also edited version from https://github.com/Saayaman/redux-context-example

# Branch

- ### [master](https://github.com/eastend-street/react-redux-vs-context/tree/master)  
  Best practice, hybrid as redux and context api. same as [context-and-redux](https://github.com/eastend-street/react-redux-vs-context/tree/context-and-redux)

<br/>

- ### [redux](https://github.com/eastend-street/react-redux-vs-context/tree/redux)  
   Only using Redux. No react hooks, contextAPI.

<br/>

- ### [make-context](https://github.com/eastend-street/react-redux-vs-context/tree/make-context)  
   Using context api to prevent props drilling. No redux.

<br/>

- ### [context-hooks](https://github.com/eastend-street/react-redux-vs-context/tree/context-hooks)  
   Using context api and hooks(useContext). By using hooks, you don't have to write code so much.

    ```javaScript
    // Only context api
    // Only context api, you need to write consumer and value argument
    return (
    <ShopContext.Consumer>
        {value => (
            <>
            <MainNavigation cartItemNumber={cartItemCount(value.cart)} />
    ```

    ```javaScript
    // Using hooks(useContext)
    // after using useContext, you don't have to use consumer. Just only use useContext and import value.
    const value = useContext(ShopContext);
    return (
        <>
        <MainNavigation cartItemNumber={cartItemCount(value.cart)} />
    ```
<br/>

- ### [redux-usereducer](https://github.com/eastend-street/react-redux-vs-context/tree/redux-usereducer)  
   Using redux and hooks(useReducer). If you use useReducer, you can get `state` and `dispatch` from useReducer.  
   You don't have to use `mapDispatchProps`, `mapStateProps`.

    ```javascript
        import reducer, { initialState } from "./store/reducers";

        const App = () => {
        const [state, dispatch] = useReducer(reducer, initialState);

        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" render={()=> <ProductsPage state={state} dispatch={dispatch} />} exact />
                    <Route path="/cart" render={()=> <CartPage state={state} dispatch={dispatch} />} exact />
                </Switch>
            </BrowserRouter>
        );
        };
    ```
<br/>

- ### [context-and-redux](https://github.com/eastend-street/react-redux-vs-context/tree/context-and-redux)  
   Hybrid context and redux. State is being managed by Redux, props drilling is resolved by context api(Provider)
   By using context api, we don't have to write so much redux code like `mapDispatchToProps` etc.  
   
   **Redux => controls global states (using useReducer)
   **Context API => used only to pass down props

