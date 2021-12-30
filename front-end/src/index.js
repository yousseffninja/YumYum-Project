import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {LoginProvider} from "./Client/Authentication/loginApi";
import {SignUpProvider} from "./Client/Authentication/signUpApi";
import {CreateCategoryProvider} from "./Client/AdminArea/Category/CreateCategoryApi";
import CreateProduct from "./Client/AdminArea/Product/CreateProduct";
import {CreateProductProvider} from "./Client/AdminArea/Product/CreateProductApi";
import {UpdateProductProvider} from "./Client/AdminArea/Product/UpdateProductApi";
import {DeleteProductProvider} from "./Client/AdminArea/Product/DeleteProductApi";
import {DeleteCategoryProvider} from "./Client/AdminArea/Category/DeleteCategoryApi";
import {UpdateCategoryProvider} from "./Client/AdminArea/Category/UpdateCategoryApi";


ReactDOM.render(
  <React.StrictMode>
      <LoginProvider>
          <SignUpProvider>
              <CreateCategoryProvider>
                  <CreateProductProvider>
                      <UpdateProductProvider>
                          <DeleteProductProvider>
                              <DeleteCategoryProvider>
                                  <UpdateCategoryProvider>
                                      <App />
                                  </UpdateCategoryProvider>
                              </DeleteCategoryProvider>
                          </DeleteProductProvider>
                      </UpdateProductProvider>
                  </CreateProductProvider>
              </CreateCategoryProvider>
          </SignUpProvider>
      </LoginProvider>

  </React.StrictMode>,
  document.getElementById('root')
);


