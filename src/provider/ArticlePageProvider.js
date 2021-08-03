import Container from "../container";

import contentDispatcherFactory from "../dispatcher/contentDispatcher";
import apiRequestModelFactory from "../model/apiRequestModel";
import { baseUrl } from "../systemConfig";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loading from "../components/general/Loading";
import Page from "../components/contentPage/Page"
import SocialBar from "../components/socialAttribute/SocialBar";
import SocialAttributeButton from "../components/socialAttribute/SocialAttributeButton";

import renderArticle from "../modifiers/renderArticle"
import WithContentData from "../components/contentPage/WithContentData";

const container = new Container()

container.setInternalModule('contentDispatcher', contentDispatcherFactory)
container.setModel('apiRequestModel', apiRequestModelFactory)
container.setUrl('baseUrl', baseUrl)

container.setComponent('Header', Header)
container.setComponent('Footer', Footer)
container.setComponent('Loading', Loading)
container.setComponent('Page', Page)
container.setComponent('render', renderArticle)
container.setComponent('SocialBar', SocialBar )
container.setComponent('SocialAttributeButton', SocialAttributeButton)


const ArticlePage = WithContentData(container.getContainer())

export default ArticlePage