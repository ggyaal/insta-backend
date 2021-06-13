"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
var graphql_tools_1 = require("graphql-tools");
var loadedTypes = graphql_tools_1.loadFilesSync(__dirname + "/**/*.typeDefs.*");
var loadedResolvers = graphql_tools_1.loadFilesSync(__dirname + "/**/*.resolvers.*");
exports.typeDefs = graphql_tools_1.mergeTypeDefs(loadedTypes);
exports.resolvers = graphql_tools_1.mergeResolvers(loadedResolvers);
