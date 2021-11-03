import Container from "../container";

import contentBodyDispatcherFactory from "../dispatcher/contentBodyDispatcher";
import apiRequestModelFactory from "../model/apiRequestModel";
import { baseUrl } from "../systemConfig";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loading from "../components/general/Loading";
import Page from "../components/contentPage/ArticlePage"
import SocialBar from "../components/socialAttribute/SocialBar";
import SocialAttributeButton from "../components/socialAttribute/SocialAttributeButton";
import CommentBox from '../components/comment/CommentBox'
import Share from '../components/general/Share'

import {renderFactory} from "../utils/renderArticle"
import WithContentData from "../components/contentPage/WithContentData";

import draftToHtml from 'draftjs-to-html'
import parser from "html-react-parser";

const container = new Container()

container.setExternalModule('draftToHtml', draftToHtml)
container.setExternalModule('htmlReactParser', parser)

container.setInternalModule('contentDispatcher', contentBodyDispatcherFactory)
container.setInternalModule('render', renderFactory)
container.setModel('apiRequestModel', apiRequestModelFactory)
container.setUrl('baseUrl', baseUrl)

container.setComponent('Header', Header)
container.setComponent('Footer', Footer)
container.setComponent('Loading', Loading)
container.setComponent('Page', Page)
container.setComponent('SocialBar', SocialBar )
container.setComponent('SocialAttributeButton', SocialAttributeButton)
container.setComponent('CommentBox', CommentBox)
container.setComponent('Share', Share)

const ArticlePage = WithContentData(container.getContainer())

export default ArticlePage