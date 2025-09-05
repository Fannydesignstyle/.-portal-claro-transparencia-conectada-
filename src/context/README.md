# Context Module

This module contains React Context providers for state management across the Transparencia Conectada platform.

## Structure

- `ProfileContext.tsx` - Context provider for user profile state management

## Purpose

The context module provides a centralized state management solution for data that needs to be shared across multiple components in the application. React Context is used for simpler state management needs that don't require a full state management library like Redux.

## Usage

Context providers should be wrapped around the components that need access to the shared state. Components can consume the context using the `useContext` hook.