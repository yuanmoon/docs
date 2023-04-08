# What is Vanus?

**Vanus** is a serverless event streaming system with event capture, storage, filter, and routing that can help you trigger and orchestrate serverless workloads and Kubernetes applications. **Vanus** provides hundreds of cloud services and application software connectors, enabling developers to route events from almost any data source to serverless workloads, helping enterprises to quickly build Event-Driven Architecture (EDA) applications, which is the core foundation of future digital enterprise facilities. 

Developers can quickly build cloud-native intelligent digital pipelines with **Vanus**. Whether it is a public cloud, a hybrid cloud, or an edge cloud, Vanus makes it easy and convenient for enterprises to use data just like water, gas, and electricity.

**Vanus** has rich build-in event sources and sinks and enables users to integrate Internet of Things (IoT) event, AI event, Databases, customized/SaaS applications, and cloud service products.

# What can you do with Vanus?

Build Event-Driven Applications, such as e-commerce systems and AI.

Build cloud-native intelligent digital pipelines in minutes.

Build IoT event processing system, such as a shared power bank.

# Why Vanus?

The goal of **Vanus** is to help users to build responsive and Event-Driven applications. Whenever an event occurs in the real world, **Vanus** can trigger serverless workloads to react to the event.

- **Any Event**: The Connector Development toolkit (CDK) can complete the development of the Connector in 1 hour, helping users to quickly accomplish event access. In the future, Vanus will provide plentiful connectors, allowing users to get the events they want from almost any system, whether services, databases, IoT devices, or SaaS systems.

- **Any Workload**: In response to events, Vanus can deliver events to any workload, whether traditional applications, serverless applications, database systems, or others.

- **Any Scale**: Vanus provides autoscaling of the entire link. Workloads are automatically scaled with the amount of requests, and can be scaled down to 0 when there is no traffic.

- **Any Where**: Vanus provides multi-cloud and hybrid cloud integration capabilities to deliver events wherever you want, whether it's a public cloud, on-premises, or edge cloud.

> **Note**
>
> As we're just getting started, many of the capabilities mentioned above are not currently available on Vanus. For example, there are very few connectors we currently provide, and workload orchestration functions are not yet supported. But If we head the right way, we will definitely reach our goal. Everyone is welcome and encouraged to join us and make Vanus stronger!

# Quick Start

This guide will help you get started with Vanus. We will cover:

- Install and run Vanus core.
- Install and run Vance.

## Vanus core

### 1. Pre-requisites

Install a [Kubenetes](https://kubernetes.io/docs/setup/)  cluster

### 2. Install with YAML file

```bash
curl -O https://download.linkall.com/all-in-one/latest.yml
kubectl apply -f latest.yml
```

### 3. Verify the installation

The all-in-one YAML file will create all required resources and run the Vanus core in the ***vanus*** namespace.

```text
~ kubectl get po -n vanus
vanus-controller-0                  1/1     Running   0             30s
vanus-controller-1                  1/1     Running   0             30s
vanus-controller-2                  1/1     Running   0             30s
vanus-gateway-5fd85c7c-vnzcw        1/1     Running   0             30s
vanus-store-0                       1/1     Running   0             30s
vanus-store-1                       1/1     Running   0             30s
vanus-store-2                       1/1     Running   0             30s
vanus-trigger-75cb74dbbf-k8jsm      1/1     Running   0             30s
```

**For more details, please see [Vanus core repo](https://github.com/linkall-labs/vanus).**

## Vance

Vance is composed of a set of source connectors and sink connectors, as well as a serverless engine.

### 1. Pre-requisites

- Install a [Kubenetes](https://kubernetes.io/docs/setup/) cluster.
- Install [KEDA](https://keda.sh/docs/2.7/deploy/).
- Install [KEDA-http](https://github.com/kedacore/http-add-on/blob/main/docs/install.md).

### 2. Install with YAML file

Use an all-in-one YAML file to simply deploy Vance.

```bash
kubectl apply -f deploy/vance-1.0.0.yaml
```

### 3. Verify the installation

The all-in-one YAML file will create vance connector Kubernetes Custom Resource Definitions (CRDs) and run the Vance controller in the ***vance*** namespace.

```text
~ kubectl get crds | grep vance
connectors.vance.io                     2022-05-15T07:50:35Z
```

```text
~ kubectl get po -n vance
NAME                                        READY   STATUS    RESTARTS      AGE
vance-controller-manager-6d454547f9-lscvv   2/2     Running   4 (80s ago)   11m
```

**For more details, please see [Vance repo](https://github.com/linkall-labs/vance).**

# Talk to us

There are three ways you can talk with our community about development-related topics:

- Join us on [Slack](https://join.slack.com/t/linkall-group/shared_invite/zt-1994ehs51-Yf5_EAvdfm4VH~o_djG7Sg) for a live and instant discussion with the developers of Vanus.
- Join and post to our [Mailing List](https://groups.google.com/g/linkall) for questions or suggestions that require more lengthy descriptions and context.
- Participate in our [Github Discussion](https://github.com/linkall-labs/vanus/discussions), which is a collaborative communication forum of Vanus.

# Get involved with Vanus

- [**Vanus Architecture**](https://github.com/linkall-labs/docs/blob/main/architecture.md)
- [**How to Contribute to Vanus**](https://github.com/linkall-labs/docs/blob/main/how-to-contribute.md)
- [**Participate in Community SIGs**](https://github.com/linkall-labs/docs/blob/main/SIGs.md)
