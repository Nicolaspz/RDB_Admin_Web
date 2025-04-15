/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/AuthContext.tsx":
/*!**********************************!*\
  !*** ./contexts/AuthContext.tsx ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/apiClients */ \"./services/apiClients.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_apiClients__WEBPACK_IMPORTED_MODULE_5__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_apiClients__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, \"@sujeitopizza.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n    } catch  {\n        console.log(\"erro ao deslogar\");\n    }\n}\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"\",\n        email: \"\",\n        token: \"\",\n        role: \"\",\n        telefone: \"\",\n        tipo_pagamento: \"\",\n        nif: \"\",\n        morada: \"\",\n        user_name: \"\"\n    });\n    const isAuthenticated = !!user;\n    const inactivityTimeout = 15 * 60 * 1000;\n    let inactivityTimer;\n    const resetInactivityTimer = ()=>{\n        clearTimeout(inactivityTimer);\n        inactivityTimer = setTimeout(()=>{\n            signOut(); // Chama a função de logout após o tempo de inatividade\n        }, inactivityTimeout);\n    };\n    const handleUserInteraction = ()=>{\n        resetInactivityTimer();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkToken = async ()=>{\n            try {\n                const { \"@sujeitopizza.token\": token } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n                if (token) {\n                    const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.get(\"/me\");\n                    const { id, name, email, role, user_name } = response.data;\n                    console.log(\"me\", response.data);\n                    setUser({\n                        id,\n                        email,\n                        name,\n                        role,\n                        user_name,\n                        token\n                    });\n                    //console.log(\"Logado\");\n                    console.log(\"token->\", token);\n                }\n            } catch (error) {\n                console.log(\"Erro ao verificar o token\", error);\n                signOut();\n            }\n        };\n        checkToken(); // Verifica o token ao carregar o componente\n        // Adiciona event listeners para redefinir o temporizador em interações do usuário\n        window.addEventListener(\"mousemove\", handleUserInteraction);\n        window.addEventListener(\"mousedown\", handleUserInteraction);\n        window.addEventListener(\"keydown\", handleUserInteraction);\n        // Inicia o temporizador quando o componente é montado\n        resetInactivityTimer();\n        return ()=>{\n            // Remove os event listeners e limpa o temporizador quando o componente é desmontado\n            window.removeEventListener(\"mousemove\", handleUserInteraction);\n            window.removeEventListener(\"mousedown\", handleUserInteraction);\n            window.removeEventListener(\"keydown\", handleUserInteraction);\n            clearTimeout(inactivityTimer);\n        };\n    // Restante do seu código...\n    }, []);\n    async function signIn({ credential, password }) {\n        try {\n            const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.post(\"/session\", {\n                credential,\n                password\n            });\n            //console.log(\"aqui\",response)\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Logado com sucesso!\");\n            console.log(\"Response-> \", response.data);\n            const { id, name, email, user_name, token, role } = response.data;\n            console.log(\"aqui\", {\n                token\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"@sujeitopizza.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\" // Quais caminhos terao acesso ao cookie\n            });\n            setUser({\n                id,\n                name,\n                role,\n                token,\n                user_name\n            });\n            console.log(\"aqui\", user);\n            //Passar para proximas requisiçoes o nosso token\n            _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n            if (user.role === \"admin\") {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n            }\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao Logar\");\n            console.log(err);\n        }\n    }\n    async function signUp({ name, email, role, user_name }) {\n        try {\n            const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.post(\"/users\", {\n                name,\n                email,\n                role,\n                user_name\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Cadastrado com sucesso!\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao se Cadastrar\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\entrega\\\\ServeServ\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 199,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFTQSxDQUFDTyxXQUFXLHVCQUF1QlcsT0FBTztnQkFDakQyQixRQUFRLEtBQUssS0FBSyxLQUFLO2dCQUN2QkMsTUFBTSxJQUFJLHdDQUF3QztZQUNwRDtZQUVBaEMsUUFBUTtnQkFDTkM7Z0JBQ0FDO2dCQUNBRztnQkFDQUQ7Z0JBQ0FNO1lBQ0Y7WUFDQWYsUUFBUUMsR0FBRyxDQUFDLFFBQVFHO1lBQ3BCLGdEQUFnRDtZQUNoRFQscURBQUdBLENBQUMyQyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sRUFBRTlCLE1BQU0sQ0FBQztZQUV6RCxJQUFHTCxLQUFLTSxJQUFJLEtBQUcsU0FBUTtnQkFDckJoQix1REFBVyxDQUFDO1lBQ2Q7UUFLRixFQUFDLE9BQU04QyxLQUFJO1lBQ1QvQyxpREFBS0EsQ0FBQ2tDLEtBQUssQ0FBQztZQUNaM0IsUUFBUUMsR0FBRyxDQUFDdUM7UUFDZDtJQUNGO0lBR0EsZUFBZUMsT0FBTyxFQUFFbEMsSUFBSSxFQUFFQyxLQUFLLEVBQUNFLElBQUksRUFBQ0ssU0FBUyxFQUFjO1FBQzlELElBQUc7WUFFRCxNQUFNUyxXQUFXLE1BQU03QixxREFBR0EsQ0FBQ3VDLElBQUksQ0FBQyxVQUFVO2dCQUN4QzNCO2dCQUNBQztnQkFDQUU7Z0JBQ0FLO1lBQ0Y7WUFFQXRCLGlEQUFLQSxDQUFDMEMsT0FBTyxDQUFDO1lBRWR6Qyx1REFBVyxDQUFDO1FBRWQsRUFBQyxPQUFNOEMsS0FBSTtZQUNUL0MsaURBQUtBLENBQUNrQyxLQUFLLENBQUM7UUFDZDtJQUNGO0lBRUEscUJBQ0UsOERBQUMvQixZQUFZOEMsUUFBUTtRQUFDQyxPQUFPO1lBQUV2QztZQUFNWTtZQUFpQmU7WUFBUWxDO1lBQVE0QztRQUFNO2tCQUN6RXRDOzs7Ozs7QUFHUCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZGFzaC8uL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD82ZDgxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge2Rlc3Ryb3lDb29raWUsc2V0Q29va2llLHBhcnNlQ29va2llc30gZnJvbSAnbm9va2llcydcclxuaW1wb3J0IHt0b2FzdH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBhcGkgfSBmcm9tICcuLi9zZXJ2aWNlcy9hcGlDbGllbnRzJztcclxuXHJcblxyXG5cclxudHlwZSBBdXRoQ29udGV4dERhdGEgPSB7XHJcbiAgdXNlcjogVXNlclByb3BzO1xyXG4gIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICBzaWduSW46IChjcmVkZW50aWFsczogU2lnbkluUHJvcHMpID0+IFByb21pc2U8dm9pZD47XHJcbiAgc2lnbk91dDogKCkgPT4gdm9pZDtcclxuICBzaWduVXA6IChjcmVkZW50aWFsczogU2lnblVwUHJvcHMpID0+IFByb21pc2U8dm9pZD47XHJcbn1cclxuXHJcbnR5cGUgVXNlclByb3BzID0ge1xyXG4gIGlkPzogc3RyaW5nO1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbiAgdG9rZW46IHN0cmluZztcclxuICByb2xlPzogc3RyaW5nO1xyXG4gIHRlbGVmb25lPzogc3RyaW5nO1xyXG4gIHRpcG9fcGFnYW1lbnRvPzogc3RyaW5nO1xyXG4gIG5pZj86IHN0cmluZztcclxuICBtb3JhZGE/OiBzdHJpbmc7XHJcbiAgdXNlcl9uYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFNpZ25JblByb3BzID0ge1xyXG4gIGNyZWRlbnRpYWw6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIFNpZ25VcFByb3BzID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgcm9sZTogc3RyaW5nO1xyXG4gIHRlbGVmb25lOiBzdHJpbmc7XHJcbiAgdGlwb19wYWdhbWVudG86IHN0cmluZztcclxuICBtb3JhZGE6IHN0cmluZztcclxuICBuaWY6IHN0cmluZztcclxuICB1c2VyX25hbWU6IHN0cmluZzsgIFxyXG59XHJcblxyXG50eXBlIEF1dGhQcm92aWRlclByb3BzID0ge1xyXG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHREYXRhKVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzaWduT3V0KCl7XHJcbiAgdHJ5e1xyXG4gICAgZGVzdHJveUNvb2tpZSh1bmRlZmluZWQsICdAc3VqZWl0b3BpenphLnRva2VuJylcclxuICAgIFJvdXRlci5wdXNoKCcvJylcclxuICB9Y2F0Y2h7XHJcbiAgICBjb25zb2xlLmxvZygnZXJybyBhbyBkZXNsb2dhcicpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHsgY2hpbGRyZW4gfTogQXV0aFByb3ZpZGVyUHJvcHMpe1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXJQcm9wcz4oe1xyXG4gICAgaWQ6ICcnLFxyXG4gICAgbmFtZTogJycsXHJcbiAgICBlbWFpbDogJycsXHJcbiAgICB0b2tlbjogJycsXHJcbiAgICByb2xlOiAnJyxcclxuICAgIHRlbGVmb25lOiAnJyxcclxuICAgIHRpcG9fcGFnYW1lbnRvOiAnJyxcclxuICAgIG5pZjogJycsXHJcbiAgICBtb3JhZGE6ICcnLFxyXG4gICAgdXNlcl9uYW1lOiAnJ1xyXG4gIH0pO1xyXG4gIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcclxuICBjb25zdCBpbmFjdGl2aXR5VGltZW91dCA9IDE1ICogNjAgKiAxMDAwOyBcclxuICBsZXQgaW5hY3Rpdml0eVRpbWVyOiBOb2RlSlMuVGltZW91dDtcclxuXHJcbiAgY29uc3QgcmVzZXRJbmFjdGl2aXR5VGltZXIgPSAoKSA9PiB7XHJcbiAgICBjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVyKTtcclxuICAgIGluYWN0aXZpdHlUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzaWduT3V0KCk7IC8vIENoYW1hIGEgZnVuw6fDo28gZGUgbG9nb3V0IGFww7NzIG8gdGVtcG8gZGUgaW5hdGl2aWRhZGVcclxuICAgIH0sIGluYWN0aXZpdHlUaW1lb3V0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVVc2VySW50ZXJhY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXNldEluYWN0aXZpdHlUaW1lcigpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiAge1xyXG4gICAgY29uc3QgY2hlY2tUb2tlbiA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCB7ICdAc3VqZWl0b3BpenphLnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLmdldCgnL21lJyk7XHJcbiAgICAgICAgICBjb25zdCB7IGlkLG5hbWUsZW1haWwscm9sZSx1c2VyX25hbWV9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lXCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgICAgIGlkLGVtYWlsLG5hbWUscm9sZSx1c2VyX25hbWUsdG9rZW5cclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIC8vY29uc29sZS5sb2coXCJMb2dhZG9cIik7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJ0b2tlbi0+XCIsdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkVycm8gYW8gdmVyaWZpY2FyIG8gdG9rZW5cIiwgZXJyb3IpO1xyXG4gICAgICAgIHNpZ25PdXQoKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGVja1Rva2VuKCk7IC8vIFZlcmlmaWNhIG8gdG9rZW4gYW8gY2FycmVnYXIgbyBjb21wb25lbnRlXHJcblxyXG4gICAgLy8gQWRpY2lvbmEgZXZlbnQgbGlzdGVuZXJzIHBhcmEgcmVkZWZpbmlyIG8gdGVtcG9yaXphZG9yIGVtIGludGVyYcOnw7VlcyBkbyB1c3XDoXJpb1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckludGVyYWN0aW9uKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlVXNlckludGVyYWN0aW9uKTtcclxuXHJcbiAgICAvLyBJbmljaWEgbyB0ZW1wb3JpemFkb3IgcXVhbmRvIG8gY29tcG9uZW50ZSDDqSBtb250YWRvXHJcbiAgICByZXNldEluYWN0aXZpdHlUaW1lcigpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIFJlbW92ZSBvcyBldmVudCBsaXN0ZW5lcnMgZSBsaW1wYSBvIHRlbXBvcml6YWRvciBxdWFuZG8gbyBjb21wb25lbnRlIMOpIGRlc21vbnRhZG9cclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBoYW5kbGVVc2VySW50ZXJhY3Rpb24pO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcbiAgICAgIGNsZWFyVGltZW91dChpbmFjdGl2aXR5VGltZXIpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBSZXN0YW50ZSBkbyBzZXUgY8OzZGlnby4uLlxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25Jbih7IGNyZWRlbnRpYWwsIHBhc3N3b3JkIH06IFNpZ25JblByb3BzKXtcclxuICAgIHRyeXtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3Nlc3Npb24nLCB7XHJcbiAgICAgICAgY3JlZGVudGlhbCxcclxuICAgICAgICBwYXNzd29yZFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgLy9jb25zb2xlLmxvZyhcImFxdWlcIixyZXNwb25zZSlcclxuICAgICAgdG9hc3Quc3VjY2VzcyhcIkxvZ2FkbyBjb20gc3VjZXNzbyFcIik7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVzcG9uc2UtPiBcIixyZXNwb25zZS5kYXRhKVxyXG4gICAgICBjb25zdCB7aWQsbmFtZSxlbWFpbCx1c2VyX25hbWUsdG9rZW4scm9sZX0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImFxdWlcIiwge3Rva2VufSk7XHJcbiAgICAgIHNldENvb2tpZSh1bmRlZmluZWQsICdAc3VqZWl0b3BpenphLnRva2VuJywgdG9rZW4sIHtcclxuICAgICAgICBtYXhBZ2U6IDYwICogNjAgKiAyNCAqIDMwLCAvLyBFeHBpcmFyIGVtIDEgbWVzXHJcbiAgICAgICAgcGF0aDogXCIvXCIgLy8gUXVhaXMgY2FtaW5ob3MgdGVyYW8gYWNlc3NvIGFvIGNvb2tpZVxyXG4gICAgICB9KVxyXG5cclxuICAgICAgc2V0VXNlcih7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbmFtZSxcclxuICAgICAgICByb2xlLFxyXG4gICAgICAgIHRva2VuLFxyXG4gICAgICAgIHVzZXJfbmFtZVxyXG4gICAgICB9KVxyXG4gICAgICBjb25zb2xlLmxvZyhcImFxdWlcIiwgdXNlcik7XHJcbiAgICAgIC8vUGFzc2FyIHBhcmEgcHJveGltYXMgcmVxdWlzacOnb2VzIG8gbm9zc28gdG9rZW5cclxuICAgICAgYXBpLmRlZmF1bHRzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgIFxyXG4gICAgICBpZih1c2VyLnJvbGU9PT0nYWRtaW4nKXtcclxuICAgICAgICBSb3V0ZXIucHVzaCgnL2Rhc2hib2FyZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcblxyXG4gICAgfWNhdGNoKGVycil7XHJcbiAgICAgIHRvYXN0LmVycm9yKFwiRXJybyBhbyBMb2dhclwiKVxyXG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIHNpZ25VcCh7IG5hbWUsIGVtYWlsLHJvbGUsdXNlcl9uYW1lfTogU2lnblVwUHJvcHMpe1xyXG4gICAgdHJ5e1xyXG4gICAgICBcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdCgnL3VzZXJzJywge1xyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgZW1haWwsXHJcbiAgICAgICAgcm9sZSxcclxuICAgICAgICB1c2VyX25hbWVcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJDYWRhc3RyYWRvIGNvbSBzdWNlc3NvIVwiKVxyXG5cclxuICAgICAgUm91dGVyLnB1c2goJy8nKVxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm8gYW8gc2UgQ2FkYXN0cmFyXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4sIHNpZ25PdXQsc2lnblVwfX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImRlc3Ryb3lDb29raWUiLCJzZXRDb29raWUiLCJwYXJzZUNvb2tpZXMiLCJ0b2FzdCIsIlJvdXRlciIsImFwaSIsIkF1dGhDb250ZXh0Iiwic2lnbk91dCIsInVuZGVmaW5lZCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlkIiwibmFtZSIsImVtYWlsIiwidG9rZW4iLCJyb2xlIiwidGVsZWZvbmUiLCJ0aXBvX3BhZ2FtZW50byIsIm5pZiIsIm1vcmFkYSIsInVzZXJfbmFtZSIsImlzQXV0aGVudGljYXRlZCIsImluYWN0aXZpdHlUaW1lb3V0IiwiaW5hY3Rpdml0eVRpbWVyIiwicmVzZXRJbmFjdGl2aXR5VGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaGFuZGxlVXNlckludGVyYWN0aW9uIiwiY2hlY2tUb2tlbiIsInJlc3BvbnNlIiwiZ2V0IiwiZGF0YSIsImVycm9yIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaWduSW4iLCJjcmVkZW50aWFsIiwicGFzc3dvcmQiLCJwb3N0Iiwic3VjY2VzcyIsIm1heEFnZSIsInBhdGgiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJlcnIiLCJzaWduVXAiLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ \"./node_modules/react-toastify/dist/ReactToastify.css\");\n/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__]);\n([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__, react_toastify__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\entrega\\\\ServeServ\\\\pages\\\\_app.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_toastify__WEBPACK_IMPORTED_MODULE_3__.ToastContainer, {\n                autoClose: 3000\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\entrega\\\\ServeServ\\\\pages\\\\_app.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\entrega\\\\ServeServ\\\\pages\\\\_app.tsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBR3dCO0FBQ1A7QUFDRDtBQUVoQyxTQUFTRSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFO0lBQ2xELHFCQUNFLDhEQUFDSiwrREFBWUE7OzBCQUNYLDhEQUFDRztnQkFBVyxHQUFHQyxTQUFTOzs7Ozs7MEJBQ3hCLDhEQUFDSCwwREFBY0E7Z0JBQUNJLFdBQVc7Ozs7Ozs7Ozs7OztBQUdqQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZGFzaC8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tICcuLi9jb21wb25lbnRzL1NpZGViYXInO1xyXG5cclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnO1xyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0ICdyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICA8VG9hc3RDb250YWluZXIgYXV0b0Nsb3NlPXszMDAwfSAvPlxyXG4gICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQXV0aFByb3ZpZGVyIiwiVG9hc3RDb250YWluZXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJhdXRvQ2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./services/api.ts":
/*!*************************!*\
  !*** ./services/api.ts ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupAPIClient: () => (/* binding */ setupAPIClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenError */ \"./services/errors/AuthTokenError.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction setupAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: \"https://raqui.vercel.app\",\n        headers: {\n            Authorization: `Bearer ${cookies[\"@sujeitopizza.token\"]}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response.status === 401) {\n            // qualquer erro 401 (não autorizado) devemos deslogar o usuário\n            if (true) {\n                // Estamos no lado do servidor, então você não deve chamar singOut() aqui\n                return Promise.reject(new _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__.AuthTokenError());\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDa0I7QUFFTjtBQUUzQyxTQUFTSSxlQUFlQyxNQUFNQyxTQUFTO0lBQzVDLElBQUlDLFVBQVVOLHFEQUFZQSxDQUFDSTtJQUUzQixNQUFNRyxNQUFNUixvREFBWSxDQUFDO1FBQ3ZCVSxTQUFTO1FBQ1RDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDM0Q7SUFDRjtJQUVBQyxJQUFJSyxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRCxDQUFBQTtRQUM1QixPQUFPQTtJQUNULEdBQUcsQ0FBQ0U7UUFDRixJQUFJQSxNQUFNRixRQUFRLENBQUNHLE1BQU0sS0FBSyxLQUFLO1lBQ2pDLGdFQUFnRTtZQUNoRSxJQUFJLElBQWtCLEVBQWE7Z0JBQ2pDLHlFQUF5RTtnQkFDekUsT0FBT0MsUUFBUUMsTUFBTSxDQUFDLElBQUlqQixrRUFBY0E7WUFDMUMsT0FBTyxFQUdOO1FBQ0g7UUFDRixPQUFPZ0IsUUFBUUMsTUFBTSxDQUFDSDtJQUN0QjtJQUVBLE9BQU9SO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhc2gvLi9zZXJ2aWNlcy9hcGkudHM/NGJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgeyBBdXRoVG9rZW5FcnJvciB9IGZyb20gJy4vZXJyb3JzL0F1dGhUb2tlbkVycm9yJ1xyXG5cclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEFQSUNsaWVudChjdHggPSB1bmRlZmluZWQpIHtcclxuICBsZXQgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHBzOi8vcmFxdWkudmVyY2VsLmFwcCcsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWydAc3VqZWl0b3BpenphLnRva2VuJ119YFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAvLyBxdWFscXVlciBlcnJvIDQwMSAobsOjbyBhdXRvcml6YWRvKSBkZXZlbW9zIGRlc2xvZ2FyIG8gdXN1w6FyaW9cclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gRXN0YW1vcyBubyBsYWRvIGRvIHNlcnZpZG9yLCBlbnTDo28gdm9jw6ogbsOjbyBkZXZlIGNoYW1hciBzaW5nT3V0KCkgYXF1aVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFRva2VuRXJyb3IoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRXN0YW1vcyBubyBsYWRvIGRvIGNsaWVudGUsIGVudMOjbyDDqSBzZWd1cm8gY2hhbWFyIHNpbmdPdXQoKVxyXG4gICAgICAgIHNpZ25PdXQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9KVxyXG5cclxuICByZXR1cm4gYXBpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsIkF1dGhUb2tlbkVycm9yIiwic2lnbk91dCIsInNldHVwQVBJQ2xpZW50IiwiY3R4IiwidW5kZWZpbmVkIiwiY29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.ts\n");

/***/ }),

/***/ "./services/apiClients.ts":
/*!********************************!*\
  !*** ./services/apiClients.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./services/api.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api__WEBPACK_IMPORTED_MODULE_0__]);\n_api__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst api = (0,_api__WEBPACK_IMPORTED_MODULE_0__.setupAPIClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGlDbGllbnRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBR2hDLE1BQU1DLE1BQU1ELG9EQUFjQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vc2VydmljZXMvYXBpQ2xpZW50cy50cz8wOTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNldHVwQVBJQ2xpZW50IH0gZnJvbSBcIi4vYXBpXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IHNldHVwQVBJQ2xpZW50KCk7Il0sIm5hbWVzIjpbInNldHVwQVBJQ2xpZW50IiwiYXBpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/apiClients.ts\n");

/***/ }),

/***/ "./services/errors/AuthTokenError.ts":
/*!*******************************************!*\
  !*** ./services/errors/AuthTokenError.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthTokenError: () => (/* binding */ AuthTokenError)\n/* harmony export */ });\nclass AuthTokenError extends Error {\n    constructor(){\n        super(\"error with authrntication token\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9lcnJvcnMvQXV0aFRva2VuRXJyb3IudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLHVCQUF1QkM7SUFDbENDLGFBQWE7UUFDWCxLQUFLLENBQUM7SUFDUjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vc2VydmljZXMvZXJyb3JzL0F1dGhUb2tlbkVycm9yLnRzP2YxYWUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEF1dGhUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3J7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHN1cGVyKCdlcnJvciB3aXRoIGF1dGhybnRpY2F0aW9uIHRva2VuJylcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiQXV0aFRva2VuRXJyb3IiLCJFcnJvciIsImNvbnN0cnVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/errors/AuthTokenError.ts\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/react-toastify"], () => (__webpack_exec__("./pages/_app.tsx")));
module.exports = __webpack_exports__;

})();