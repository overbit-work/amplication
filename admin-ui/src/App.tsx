import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ModelList } from "./model/ModelList";
import { ModelCreate } from "./model/ModelCreate";
import { ModelEdit } from "./model/ModelEdit";
import { ModelShow } from "./model/ModelShow";
import { ConversationTypeList } from "./conversationType/ConversationTypeList";
import { ConversationTypeCreate } from "./conversationType/ConversationTypeCreate";
import { ConversationTypeEdit } from "./conversationType/ConversationTypeEdit";
import { ConversationTypeShow } from "./conversationType/ConversationTypeShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { MessageList } from "./message/MessageList";
import { MessageCreate } from "./message/MessageCreate";
import { MessageEdit } from "./message/MessageEdit";
import { MessageShow } from "./message/MessageShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"gpt-gateway"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
          <Resource
            name="Model"
            list={ModelList}
            edit={ModelEdit}
            create={ModelCreate}
            show={ModelShow}
          />
          <Resource
            name="ConversationType"
            list={ConversationTypeList}
            edit={ConversationTypeEdit}
            create={ConversationTypeCreate}
            show={ConversationTypeShow}
          />
          <Resource
            name="Template"
            list={TemplateList}
            edit={TemplateEdit}
            create={TemplateCreate}
            show={TemplateShow}
          />
          <Resource
            name="Message"
            list={MessageList}
            edit={MessageEdit}
            create={MessageCreate}
            show={MessageShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
