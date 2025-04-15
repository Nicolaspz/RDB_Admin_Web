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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider),\n/* harmony export */   signOut: () => (/* binding */ signOut)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_apiClients__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/apiClients */ \"./services/apiClients.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_apiClients__WEBPACK_IMPORTED_MODULE_5__]);\n([react_toastify__WEBPACK_IMPORTED_MODULE_3__, _services_apiClients__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction signOut() {\n    try {\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(undefined, \"@sujeitopizza.token\");\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n    } catch  {\n        console.log(\"erro ao deslogar\");\n    }\n}\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id: \"\",\n        name: \"\",\n        email: \"\",\n        token: \"\",\n        role: \"\",\n        telefone: \"\",\n        tipo_pagamento: \"\",\n        nif: \"\",\n        morada: \"\",\n        user_name: \"\"\n    });\n    const isAuthenticated = !!user;\n    const inactivityTimeout = 15 * 60 * 1000;\n    let inactivityTimer;\n    const resetInactivityTimer = ()=>{\n        clearTimeout(inactivityTimer);\n        inactivityTimer = setTimeout(()=>{\n            signOut(); // Chama a função de logout após o tempo de inatividade\n        }, inactivityTimeout);\n    };\n    const handleUserInteraction = ()=>{\n        resetInactivityTimer();\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const checkToken = async ()=>{\n            try {\n                const { \"@sujeitopizza.token\": token } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n                if (token) {\n                    const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.get(\"/me\");\n                    const { id, name, email, role, user_name } = response.data;\n                    //const organization = response.data.organizationId;\n                    console.log(\"me\", response.data);\n                    setUser({\n                        id,\n                        email,\n                        name,\n                        role,\n                        user_name,\n                        token\n                    });\n                    //console.log(\"Logado\");\n                    console.log(\"token->\", token);\n                }\n            } catch (error) {\n                console.log(\"Erro ao verificar o token\", error);\n                signOut();\n            }\n        };\n        checkToken(); // Verifica o token ao carregar o componente\n        // Adiciona event listeners para redefinir o temporizador em interações do usuário\n        window.addEventListener(\"mousemove\", handleUserInteraction);\n        window.addEventListener(\"mousedown\", handleUserInteraction);\n        window.addEventListener(\"keydown\", handleUserInteraction);\n        // Inicia o temporizador quando o componente é montado\n        resetInactivityTimer();\n        return ()=>{\n            // Remove os event listeners e limpa o temporizador quando o componente é desmontado\n            window.removeEventListener(\"mousemove\", handleUserInteraction);\n            window.removeEventListener(\"mousedown\", handleUserInteraction);\n            window.removeEventListener(\"keydown\", handleUserInteraction);\n            clearTimeout(inactivityTimer);\n        };\n    // Restante do seu código...\n    }, []);\n    async function signIn({ credential, password }) {\n        try {\n            const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.post(\"/session\", {\n                credential,\n                password\n            });\n            //console.log(\"aqui\",response)\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Logado com sucesso!\");\n            console.log(\"Response-> \", response.data);\n            const { id, name, email, user_name, token, role } = response.data;\n            console.log(\"aqui\", {\n                token\n            });\n            (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"@sujeitopizza.token\", token, {\n                maxAge: 60 * 60 * 24 * 30,\n                path: \"/\" // Quais caminhos terao acesso ao cookie\n            });\n            setUser({\n                id,\n                name,\n                role,\n                token,\n                user_name\n            });\n            console.log(\"aqui\", user);\n            //Passar para proximas requisiçoes o nosso token\n            _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n            if (user.role === \"admin\") {\n                next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n            }\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao Logar\");\n            console.log(err);\n        }\n    }\n    async function signUp({ name, email, role, user_name }) {\n        try {\n            const response = await _services_apiClients__WEBPACK_IMPORTED_MODULE_5__.api.post(\"/users\", {\n                name,\n                email,\n                role,\n                user_name\n            });\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.success(\"Cadastrado com sucesso!\");\n            next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/\");\n        } catch (err) {\n            react_toastify__WEBPACK_IMPORTED_MODULE_3__.toast.error(\"Erro ao se Cadastrar\");\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn,\n            signOut,\n            signUp\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\PC-WEE-LPT012\\\\Desktop\\\\entrega\\\\ServeServ\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 199,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLO1lBQzFCbEIsa0RBQVNBLENBQUNPLFdBQVcsdUJBQXVCVyxPQUFPO2dCQUNqRDJCLFFBQVEsS0FBSyxLQUFLLEtBQUs7Z0JBQ3ZCQyxNQUFNLElBQUksd0NBQXdDO1lBQ3BEO1lBRUFoQyxRQUFRO2dCQUNOQztnQkFDQUM7Z0JBQ0FHO2dCQUNBRDtnQkFDQU07WUFDRjtZQUNBZixRQUFRQyxHQUFHLENBQUMsUUFBUUc7WUFDcEIsZ0RBQWdEO1lBQ2hEVCxxREFBR0EsQ0FBQzJDLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLGdCQUFnQixHQUFHLENBQUMsT0FBTyxFQUFFOUIsTUFBTSxDQUFDO1lBRXpELElBQUdMLEtBQUtNLElBQUksS0FBRyxTQUFRO2dCQUNyQmhCLHVEQUFXLENBQUM7WUFDZDtRQUtGLEVBQUMsT0FBTThDLEtBQUk7WUFDVC9DLGlEQUFLQSxDQUFDa0MsS0FBSyxDQUFDO1lBQ1ozQixRQUFRQyxHQUFHLENBQUN1QztRQUNkO0lBQ0Y7SUFHQSxlQUFlQyxPQUFPLEVBQUVsQyxJQUFJLEVBQUVDLEtBQUssRUFBQ0UsSUFBSSxFQUFDSyxTQUFTLEVBQWM7UUFDOUQsSUFBRztZQUVELE1BQU1TLFdBQVcsTUFBTTdCLHFEQUFHQSxDQUFDdUMsSUFBSSxDQUFDLFVBQVU7Z0JBQ3hDM0I7Z0JBQ0FDO2dCQUNBRTtnQkFDQUs7WUFDRjtZQUVBdEIsaURBQUtBLENBQUMwQyxPQUFPLENBQUM7WUFFZHpDLHVEQUFXLENBQUM7UUFFZCxFQUFDLE9BQU04QyxLQUFJO1lBQ1QvQyxpREFBS0EsQ0FBQ2tDLEtBQUssQ0FBQztRQUNkO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQy9CLFlBQVk4QyxRQUFRO1FBQUNDLE9BQU87WUFBRXZDO1lBQU1ZO1lBQWlCZTtZQUFRbEM7WUFBUTRDO1FBQU07a0JBQ3pFdEM7Ozs7OztBQUdQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1kYXNoLy4vY29udGV4dHMvQXV0aENvbnRleHQudHN4PzZkODEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgUmVhY3ROb2RlLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7ZGVzdHJveUNvb2tpZSxzZXRDb29raWUscGFyc2VDb29raWVzfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQge3RvYXN0fSBmcm9tICdyZWFjdC10b2FzdGlmeSdcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IGFwaSB9IGZyb20gJy4uL3NlcnZpY2VzL2FwaUNsaWVudHMnO1xyXG5cclxuXHJcblxyXG50eXBlIEF1dGhDb250ZXh0RGF0YSA9IHtcclxuICB1c2VyOiBVc2VyUHJvcHM7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gIHNpZ25JbjogKGNyZWRlbnRpYWxzOiBTaWduSW5Qcm9wcykgPT4gUHJvbWlzZTx2b2lkPjtcclxuICBzaWduT3V0OiAoKSA9PiB2b2lkO1xyXG4gIHNpZ25VcDogKGNyZWRlbnRpYWxzOiBTaWduVXBQcm9wcykgPT4gUHJvbWlzZTx2b2lkPjtcclxufVxyXG5cclxudHlwZSBVc2VyUHJvcHMgPSB7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgbmFtZT86IHN0cmluZztcclxuICBlbWFpbD86IHN0cmluZztcclxuICB0b2tlbjogc3RyaW5nO1xyXG4gIHJvbGU/OiBzdHJpbmc7XHJcbiAgdGVsZWZvbmU/OiBzdHJpbmc7XHJcbiAgdGlwb19wYWdhbWVudG8/OiBzdHJpbmc7XHJcbiAgbmlmPzogc3RyaW5nO1xyXG4gIG1vcmFkYT86IHN0cmluZztcclxuICB1c2VyX25hbWU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgU2lnbkluUHJvcHMgPSB7XHJcbiAgY3JlZGVudGlhbDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgU2lnblVwUHJvcHMgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICByb2xlOiBzdHJpbmc7XHJcbiAgdGVsZWZvbmU6IHN0cmluZztcclxuICB0aXBvX3BhZ2FtZW50bzogc3RyaW5nO1xyXG4gIG1vcmFkYTogc3RyaW5nO1xyXG4gIG5pZjogc3RyaW5nO1xyXG4gIHVzZXJfbmFtZTogc3RyaW5nOyAgXHJcbn1cclxuXHJcbnR5cGUgQXV0aFByb3ZpZGVyUHJvcHMgPSB7XHJcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dERhdGEpXHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNpZ25PdXQoKXtcclxuICB0cnl7XHJcbiAgICBkZXN0cm95Q29va2llKHVuZGVmaW5lZCwgJ0BzdWplaXRvcGl6emEudG9rZW4nKVxyXG4gICAgUm91dGVyLnB1c2goJy8nKVxyXG4gIH1jYXRjaHtcclxuICAgIGNvbnNvbGUubG9nKCdlcnJvIGFvIGRlc2xvZ2FyJylcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OiBBdXRoUHJvdmlkZXJQcm9wcyl7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlclByb3BzPih7XHJcbiAgICBpZDogJycsXHJcbiAgICBuYW1lOiAnJyxcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHRva2VuOiAnJyxcclxuICAgIHJvbGU6ICcnLFxyXG4gICAgdGVsZWZvbmU6ICcnLFxyXG4gICAgdGlwb19wYWdhbWVudG86ICcnLFxyXG4gICAgbmlmOiAnJyxcclxuICAgIG1vcmFkYTogJycsXHJcbiAgICB1c2VyX25hbWU6ICcnXHJcbiAgfSk7XHJcbiAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xyXG4gIGNvbnN0IGluYWN0aXZpdHlUaW1lb3V0ID0gMTUgKiA2MCAqIDEwMDA7IFxyXG4gIGxldCBpbmFjdGl2aXR5VGltZXI6IE5vZGVKUy5UaW1lb3V0O1xyXG5cclxuICBjb25zdCByZXNldEluYWN0aXZpdHlUaW1lciA9ICgpID0+IHtcclxuICAgIGNsZWFyVGltZW91dChpbmFjdGl2aXR5VGltZXIpO1xyXG4gICAgaW5hY3Rpdml0eVRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHNpZ25PdXQoKTsgLy8gQ2hhbWEgYSBmdW7Dp8OjbyBkZSBsb2dvdXQgYXDDs3MgbyB0ZW1wbyBkZSBpbmF0aXZpZGFkZVxyXG4gICAgfSwgaW5hY3Rpdml0eVRpbWVvdXQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVVzZXJJbnRlcmFjdGlvbiA9ICgpID0+IHtcclxuICAgIHJlc2V0SW5hY3Rpdml0eVRpbWVyKCk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+ICB7XHJcbiAgICBjb25zdCBjaGVja1Rva2VuID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHsgJ0BzdWplaXRvcGl6emEudG9rZW4nOiB0b2tlbiB9ID0gcGFyc2VDb29raWVzKCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KCcvbWUnKTtcclxuICAgICAgICAgIGNvbnN0IHsgaWQsbmFtZSxlbWFpbCxyb2xlLHVzZXJfbmFtZX0gPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgICAgLy9jb25zdCBvcmdhbml6YXRpb24gPSByZXNwb25zZS5kYXRhLm9yZ2FuaXphdGlvbklkO1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJtZVwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgICAgICBpZCxlbWFpbCxuYW1lLHJvbGUsdXNlcl9uYW1lLHRva2VuXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTG9nYWRvXCIpO1xyXG4gICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4tPlwiLHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvIGFvIHZlcmlmaWNhciBvIHRva2VuXCIsIGVycm9yKTtcclxuICAgICAgICBzaWduT3V0KCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY2hlY2tUb2tlbigpOyAvLyBWZXJpZmljYSBvIHRva2VuIGFvIGNhcnJlZ2FyIG8gY29tcG9uZW50ZVxyXG5cclxuICAgIC8vIEFkaWNpb25hIGV2ZW50IGxpc3RlbmVycyBwYXJhIHJlZGVmaW5pciBvIHRlbXBvcml6YWRvciBlbSBpbnRlcmHDp8O1ZXMgZG8gdXN1w6FyaW9cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVVc2VySW50ZXJhY3Rpb24pO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZVVzZXJJbnRlcmFjdGlvbik7XHJcblxyXG4gICAgLy8gSW5pY2lhIG8gdGVtcG9yaXphZG9yIHF1YW5kbyBvIGNvbXBvbmVudGUgw6kgbW9udGFkb1xyXG4gICAgcmVzZXRJbmFjdGl2aXR5VGltZXIoKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAvLyBSZW1vdmUgb3MgZXZlbnQgbGlzdGVuZXJzIGUgbGltcGEgbyB0ZW1wb3JpemFkb3IgcXVhbmRvIG8gY29tcG9uZW50ZSDDqSBkZXNtb250YWRvXHJcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVVc2VySW50ZXJhY3Rpb24pO1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgaGFuZGxlVXNlckludGVyYWN0aW9uKTtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBoYW5kbGVVc2VySW50ZXJhY3Rpb24pO1xyXG4gICAgICBjbGVhclRpbWVvdXQoaW5hY3Rpdml0eVRpbWVyKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gUmVzdGFudGUgZG8gc2V1IGPDs2RpZ28uLi5cclxuXHJcbiAgfSwgW10pO1xyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduSW4oeyBjcmVkZW50aWFsLCBwYXNzd29yZCB9OiBTaWduSW5Qcm9wcyl7XHJcbiAgICB0cnl7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy9zZXNzaW9uJywge1xyXG4gICAgICAgIGNyZWRlbnRpYWwsXHJcbiAgICAgICAgcGFzc3dvcmRcclxuICAgICAgfSlcclxuXHJcbiAgICAgIC8vY29uc29sZS5sb2coXCJhcXVpXCIscmVzcG9uc2UpXHJcbiAgICAgIHRvYXN0LnN1Y2Nlc3MoXCJMb2dhZG8gY29tIHN1Y2Vzc28hXCIpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlJlc3BvbnNlLT4gXCIscmVzcG9uc2UuZGF0YSlcclxuICAgICAgY29uc3Qge2lkLG5hbWUsZW1haWwsdXNlcl9uYW1lLHRva2VuLHJvbGV9ID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2coXCJhcXVpXCIsIHt0b2tlbn0pO1xyXG4gICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnQHN1amVpdG9waXp6YS50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMjQgKiAzMCwgLy8gRXhwaXJhciBlbSAxIG1lc1xyXG4gICAgICAgIHBhdGg6IFwiL1wiIC8vIFF1YWlzIGNhbWluaG9zIHRlcmFvIGFjZXNzbyBhbyBjb29raWVcclxuICAgICAgfSlcclxuXHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgcm9sZSxcclxuICAgICAgICB0b2tlbixcclxuICAgICAgICB1c2VyX25hbWVcclxuICAgICAgfSlcclxuICAgICAgY29uc29sZS5sb2coXCJhcXVpXCIsIHVzZXIpO1xyXG4gICAgICAvL1Bhc3NhciBwYXJhIHByb3hpbWFzIHJlcXVpc2nDp29lcyBvIG5vc3NvIHRva2VuXHJcbiAgICAgIGFwaS5kZWZhdWx0cy5oZWFkZXJzWydBdXRob3JpemF0aW9uJ10gPSBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICBcclxuICAgICAgaWYodXNlci5yb2xlPT09J2FkbWluJyl7XHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgXHJcblxyXG5cclxuICAgIH1jYXRjaChlcnIpe1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVycm8gYW8gTG9nYXJcIilcclxuICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBhc3luYyBmdW5jdGlvbiBzaWduVXAoeyBuYW1lLCBlbWFpbCxyb2xlLHVzZXJfbmFtZX06IFNpZ25VcFByb3BzKXtcclxuICAgIHRyeXtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoJy91c2VycycsIHtcclxuICAgICAgICBuYW1lLFxyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHJvbGUsXHJcbiAgICAgICAgdXNlcl9uYW1lXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICB0b2FzdC5zdWNjZXNzKFwiQ2FkYXN0cmFkbyBjb20gc3VjZXNzbyFcIilcclxuXHJcbiAgICAgIFJvdXRlci5wdXNoKCcvJylcclxuXHJcbiAgICB9Y2F0Y2goZXJyKXtcclxuICAgICAgdG9hc3QuZXJyb3IoXCJFcnJvIGFvIHNlIENhZGFzdHJhclwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPEF1dGhDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHVzZXIsIGlzQXV0aGVudGljYXRlZCwgc2lnbkluLCBzaWduT3V0LHNpZ25VcH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufSJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJkZXN0cm95Q29va2llIiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwidG9hc3QiLCJSb3V0ZXIiLCJhcGkiLCJBdXRoQ29udGV4dCIsInNpZ25PdXQiLCJ1bmRlZmluZWQiLCJwdXNoIiwiY29uc29sZSIsImxvZyIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpZCIsIm5hbWUiLCJlbWFpbCIsInRva2VuIiwicm9sZSIsInRlbGVmb25lIiwidGlwb19wYWdhbWVudG8iLCJuaWYiLCJtb3JhZGEiLCJ1c2VyX25hbWUiLCJpc0F1dGhlbnRpY2F0ZWQiLCJpbmFjdGl2aXR5VGltZW91dCIsImluYWN0aXZpdHlUaW1lciIsInJlc2V0SW5hY3Rpdml0eVRpbWVyIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsImhhbmRsZVVzZXJJbnRlcmFjdGlvbiIsImNoZWNrVG9rZW4iLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJlcnJvciIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2lnbkluIiwiY3JlZGVudGlhbCIsInBhc3N3b3JkIiwicG9zdCIsInN1Y2Nlc3MiLCJtYXhBZ2UiLCJwYXRoIiwiZGVmYXVsdHMiLCJoZWFkZXJzIiwiZXJyIiwic2lnblVwIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/AuthContext.tsx\n");

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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setupAPIClient: () => (/* binding */ setupAPIClient)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors/AuthTokenError */ \"./services/errors/AuthTokenError.ts\");\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__]);\n([axios__WEBPACK_IMPORTED_MODULE_0__, _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nfunction setupAPIClient(ctx = undefined) {\n    let cookies = (0,nookies__WEBPACK_IMPORTED_MODULE_1__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n        baseURL: \"http://localhost:3333\",\n        headers: {\n            Authorization: `Bearer ${cookies[\"@sujeitopizza.token\"]}`\n        }\n    });\n    api.interceptors.response.use((response)=>{\n        return response;\n    }, (error)=>{\n        if (error.response.status === 401) {\n            // qualquer erro 401 (não autorizado) devemos deslogar o usuário\n            if (true) {\n                // Estamos no lado do servidor, então você não deve chamar singOut() aqui\n                return Promise.reject(new _errors_AuthTokenError__WEBPACK_IMPORTED_MODULE_2__.AuthTokenError());\n            } else {}\n        }\n        return Promise.reject(error);\n    });\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0g7QUFDa0I7QUFFTjtBQUUzQyxTQUFTSSxlQUFlQyxNQUFNQyxTQUFTO0lBQzVDLElBQUlDLFVBQVVOLHFEQUFZQSxDQUFDSTtJQUUzQixNQUFNRyxNQUFNUixvREFBWSxDQUFDO1FBQ3ZCVSxTQUFTO1FBQ1RDLFNBQVM7WUFDUEMsZUFBZSxDQUFDLE9BQU8sRUFBRUwsT0FBTyxDQUFDLHNCQUFzQixDQUFDLENBQUM7UUFDM0Q7SUFDRjtJQUVBQyxJQUFJSyxZQUFZLENBQUNDLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDRCxDQUFBQTtRQUM1QixPQUFPQTtJQUNULEdBQUcsQ0FBQ0U7UUFDRixJQUFJQSxNQUFNRixRQUFRLENBQUNHLE1BQU0sS0FBSyxLQUFLO1lBQ2pDLGdFQUFnRTtZQUNoRSxJQUFJLElBQWtCLEVBQWE7Z0JBQ2pDLHlFQUF5RTtnQkFDekUsT0FBT0MsUUFBUUMsTUFBTSxDQUFDLElBQUlqQixrRUFBY0E7WUFDMUMsT0FBTyxFQUdOO1FBQ0g7UUFDRixPQUFPZ0IsUUFBUUMsTUFBTSxDQUFDSDtJQUN0QjtJQUVBLE9BQU9SO0FBQ1QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWRhc2gvLi9zZXJ2aWNlcy9hcGkudHM/NGJlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NFcnJvciB9IGZyb20gJ2F4aW9zJ1xyXG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJ1xyXG5pbXBvcnQgeyBBdXRoVG9rZW5FcnJvciB9IGZyb20gJy4vZXJyb3JzL0F1dGhUb2tlbkVycm9yJ1xyXG5cclxuaW1wb3J0IHsgc2lnbk91dCB9IGZyb20gJy4uL2NvbnRleHRzL0F1dGhDb250ZXh0JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXR1cEFQSUNsaWVudChjdHggPSB1bmRlZmluZWQpIHtcclxuICBsZXQgY29va2llcyA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzMzMycsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtjb29raWVzWydAc3VqZWl0b3BpenphLnRva2VuJ119YFxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGFwaS5pbnRlcmNlcHRvcnMucmVzcG9uc2UudXNlKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZTtcclxuICB9LCAoZXJyb3I6IEF4aW9zRXJyb3IpID0+IHtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAvLyBxdWFscXVlciBlcnJvIDQwMSAobsOjbyBhdXRvcml6YWRvKSBkZXZlbW9zIGRlc2xvZ2FyIG8gdXN1w6FyaW9cclxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgLy8gRXN0YW1vcyBubyBsYWRvIGRvIHNlcnZpZG9yLCBlbnTDo28gdm9jw6ogbsOjbyBkZXZlIGNoYW1hciBzaW5nT3V0KCkgYXF1aVxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgQXV0aFRva2VuRXJyb3IoKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gRXN0YW1vcyBubyBsYWRvIGRvIGNsaWVudGUsIGVudMOjbyDDqSBzZWd1cm8gY2hhbWFyIHNpbmdPdXQoKVxyXG4gICAgICAgIHNpZ25PdXQoKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICB9KVxyXG5cclxuICByZXR1cm4gYXBpO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJheGlvcyIsInBhcnNlQ29va2llcyIsIkF1dGhUb2tlbkVycm9yIiwic2lnbk91dCIsInNldHVwQVBJQ2xpZW50IiwiY3R4IiwidW5kZWZpbmVkIiwiY29va2llcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImludGVyY2VwdG9ycyIsInJlc3BvbnNlIiwidXNlIiwiZXJyb3IiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api.ts\n");

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