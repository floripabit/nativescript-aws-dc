declare module com {
	export module amazonaws {
		export class AbortedException extends com.amazonaws.AmazonClientException {
			public static class: java.lang.Class<com.amazonaws.AbortedException>;
			public isRetryable(): boolean;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor();
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module amazonaws {
		export class AmazonClientException {
			public static class: java.lang.Class<com.amazonaws.AmazonClientException>;
			public isRetryable(): boolean;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module amazonaws {
		export class AmazonServiceException extends com.amazonaws.AmazonClientException {
			public static class: java.lang.Class<com.amazonaws.AmazonServiceException>;
			public setErrorCode(param0: string): void;
			public constructor(param0: java.lang.Throwable);
			public getErrorCode(): string;
			public setStatusCode(param0: number): void;
			public setErrorMessage(param0: string): void;
			public getStatusCode(): number;
			public getServiceName(): string;
			public setRequestId(param0: string): void;
			public getMessage(): string;
			public setServiceName(param0: string): void;
			public setErrorType(param0: com.amazonaws.AmazonServiceException.ErrorType): void;
			public getErrorMessage(): string;
			public getRequestId(): string;
			public constructor(param0: string, param1: java.lang.Throwable);
			public constructor(param0: string, param1: java.lang.Exception);
			public constructor(param0: string);
			public getErrorType(): com.amazonaws.AmazonServiceException.ErrorType;
		}
		export module AmazonServiceException {
			export class ErrorType {
				public static class: java.lang.Class<com.amazonaws.AmazonServiceException.ErrorType>;
				public static Client: com.amazonaws.AmazonServiceException.ErrorType;
				public static Service: com.amazonaws.AmazonServiceException.ErrorType;
				public static Unknown: com.amazonaws.AmazonServiceException.ErrorType;
				public static values(): native.Array<com.amazonaws.AmazonServiceException.ErrorType>;
				public static valueOf(param0: string): com.amazonaws.AmazonServiceException.ErrorType;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export abstract class AmazonWebServiceClient {
			public static class: java.lang.Class<com.amazonaws.AmazonWebServiceClient>;
			public static LOGGING_AWS_REQUEST_METRIC: boolean;
			public endpoint: java.net.URI;
			public clientConfiguration: com.amazonaws.ClientConfiguration;
			public client: com.amazonaws.http.AmazonHttpClient;
			public requestHandler2s: java.util.List<com.amazonaws.handlers.RequestHandler2>;
			public timeOffset: number;
			public endpointPrefix: string;
			/** @deprecated */
			public configSigner(param0: java.net.URI): void;
			/** @deprecated */
			public removeRequestHandler(param0: com.amazonaws.handlers.RequestHandler): void;
			/** @deprecated */
			public createExecutionContext(): com.amazonaws.http.ExecutionContext;
			public getTimeOffset(): number;
			public createExecutionContext(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.http.ExecutionContext;
			/** @deprecated */
			public addRequestHandler(param0: com.amazonaws.handlers.RequestHandler): void;
			public getEndpoint(): string;
			public getServiceName(): string;
			public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.http.HttpClient);
			/** @deprecated */
			public requestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
			/** @deprecated */
			public endClientExecution(param0: com.amazonaws.util.AWSRequestMetrics, param1: com.amazonaws.Request<any>, param2: com.amazonaws.Response<any>): void;
			public getServiceNameIntern(): string;
			public getSigner(): com.amazonaws.auth.Signer;
			/** @deprecated */
			public setConfiguration(param0: com.amazonaws.ClientConfiguration): void;
			public withTimeOffset(param0: number): com.amazonaws.AmazonWebServiceClient;
			public shutdown(): void;
			/** @deprecated */
			public getRequestMetricsCollector(): com.amazonaws.metrics.RequestMetricCollector;
			public setEndpoint(param0: string): void;
			/** @deprecated */
			public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.http.HttpClient, param2: com.amazonaws.metrics.RequestMetricCollector);
			public setSignerRegionOverride(param0: string): void;
			public getEndpointPrefix(): string;
			/** @deprecated */
			public isRequestMetricsEnabled(param0: com.amazonaws.AmazonWebServiceRequest): boolean;
			public addRequestHandler(param0: com.amazonaws.handlers.RequestHandler2): void;
			public createExecutionContext(param0: com.amazonaws.Request<any>): com.amazonaws.http.ExecutionContext;
			/** @deprecated */
			public endClientExecution(param0: com.amazonaws.util.AWSRequestMetrics, param1: com.amazonaws.Request<any>, param2: com.amazonaws.Response<any>, param3: boolean): void;
			public getSignerByURI(param0: java.net.URI): com.amazonaws.auth.Signer;
			/** @deprecated */
			public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.metrics.RequestMetricCollector);
			/** @deprecated */
			public getServiceAbbreviation(): string;
			public removeRequestHandler(param0: com.amazonaws.handlers.RequestHandler2): void;
			public setRegion(param0: com.amazonaws.regions.Region): void;
			public setTimeOffset(param0: number): void;
			public getRegions(): com.amazonaws.regions.Regions;
			/** @deprecated */
			public findRequestMetricCollector(param0: com.amazonaws.Request<any>): com.amazonaws.metrics.RequestMetricCollector;
			/** @deprecated */
			public setEndpoint(param0: string, param1: string, param2: string): void;
			/** @deprecated */
			public static isProfilingEnabled(): boolean;
			public getSignerRegionOverride(): string;
			public setServiceNameIntern(param0: string): void;
			public constructor(param0: com.amazonaws.ClientConfiguration);
			/** @deprecated */
			public configSigner(param0: string, param1: string): void;
		}
	}
}

declare module com {
	export module amazonaws {
		export abstract class AmazonWebServiceRequest {
			public static class: java.lang.Class<com.amazonaws.AmazonWebServiceRequest>;
			/** @deprecated */
			public setRequestMetricCollector(param0: com.amazonaws.metrics.RequestMetricCollector): void;
			/** @deprecated */
			public getRequestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
			public withGeneralProgressListener(param0: com.amazonaws.event.ProgressListener): com.amazonaws.AmazonWebServiceRequest;
			public constructor();
			public getCloneRoot(): com.amazonaws.AmazonWebServiceRequest;
			public clone(): com.amazonaws.AmazonWebServiceRequest;
			public getGeneralProgressListener(): com.amazonaws.event.ProgressListener;
			public setRequestCredentials(param0: com.amazonaws.auth.AWSCredentials): void;
			public copyBaseTo(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.AmazonWebServiceRequest;
			/** @deprecated */
			public withRequestMetricCollector(param0: com.amazonaws.metrics.RequestMetricCollector): com.amazonaws.AmazonWebServiceRequest;
			public setGeneralProgressListener(param0: com.amazonaws.event.ProgressListener): void;
			public getCloneSource(): com.amazonaws.AmazonWebServiceRequest;
			public getRequestCredentials(): com.amazonaws.auth.AWSCredentials;
			public getRequestClientOptions(): com.amazonaws.RequestClientOptions;
		}
	}
}

declare module com {
	export module amazonaws {
		export class AmazonWebServiceResponse<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.amazonaws.AmazonWebServiceResponse<any>>;
			public getResponseMetadata(): com.amazonaws.ResponseMetadata;
			public setResult(param0: T): void;
			public setResponseMetadata(param0: com.amazonaws.ResponseMetadata): void;
			public getRequestId(): string;
			public constructor();
			public getResult(): T;
		}
	}
}

declare module com {
	export module amazonaws {
		export class ClientConfiguration {
			public static class: java.lang.Class<com.amazonaws.ClientConfiguration>;
			public static DEFAULT_CONNECTION_TIMEOUT: number;
			public static DEFAULT_SOCKET_TIMEOUT: number;
			public static DEFAULT_MAX_CONNECTIONS: number;
			public static DEFAULT_USER_AGENT: string;
			public static DEFAULT_RETRY_POLICY: com.amazonaws.retry.RetryPolicy;
			public static DEFAULT_USE_REAPER: boolean;
			public isPreemptiveBasicProxyAuth(): boolean;
			public getProxyUsername(): string;
			public withProtocol(param0: com.amazonaws.Protocol): com.amazonaws.ClientConfiguration;
			/** @deprecated */
			public withProxyDomain(param0: string): com.amazonaws.ClientConfiguration;
			public withSocketBufferSizeHints(param0: number, param1: number): com.amazonaws.ClientConfiguration;
			public withRetryPolicy(param0: com.amazonaws.retry.RetryPolicy): com.amazonaws.ClientConfiguration;
			public isEnableGzip(): boolean;
			public setMaxConnections(param0: number): void;
			public isCurlLogging(): boolean;
			public withReaper(param0: boolean): com.amazonaws.ClientConfiguration;
			public setProxyHost(param0: string): void;
			public getTrustManager(): javax.net.ssl.TrustManager;
			public withPreemptiveBasicProxyAuth(param0: boolean): com.amazonaws.ClientConfiguration;
			public useReaper(): boolean;
			/** @deprecated */
			public getProxyDomain(): string;
			public setUserAgent(param0: string): void;
			public getMaxErrorRetry(): number;
			public withMaxErrorRetry(param0: number): com.amazonaws.ClientConfiguration;
			/** @deprecated */
			public setProxyWorkstation(param0: string): void;
			public constructor();
			public setConnectionTimeout(param0: number): void;
			public withEnableGzip(param0: boolean): com.amazonaws.ClientConfiguration;
			public setProxyUsername(param0: string): void;
			public getSocketBufferSizeHints(): native.Array<number>;
			public withProxyPassword(param0: string): com.amazonaws.ClientConfiguration;
			public withUserAgent(param0: string): com.amazonaws.ClientConfiguration;
			public setMaxErrorRetry(param0: number): void;
			public getProxyHost(): string;
			public setSignerOverride(param0: string): void;
			public withSocketTimeout(param0: number): com.amazonaws.ClientConfiguration;
			public getSignerOverride(): string;
			public withMaxConnections(param0: number): com.amazonaws.ClientConfiguration;
			public getProxyPort(): number;
			public setProtocol(param0: com.amazonaws.Protocol): void;
			public withConnectionTimeout(param0: number): com.amazonaws.ClientConfiguration;
			public setLocalAddress(param0: java.net.InetAddress): void;
			public setSocketBufferSizeHints(param0: number, param1: number): void;
			/** @deprecated */
			public setProxyDomain(param0: string): void;
			public withProxyPort(param0: number): com.amazonaws.ClientConfiguration;
			public getLocalAddress(): java.net.InetAddress;
			public getProxyPassword(): string;
			public withCurlLogging(param0: boolean): com.amazonaws.ClientConfiguration;
			public setProxyPort(param0: number): void;
			public getMaxConnections(): number;
			public setRetryPolicy(param0: com.amazonaws.retry.RetryPolicy): void;
			public getSocketTimeout(): number;
			public setUseReaper(param0: boolean): void;
			public getUserAgent(): string;
			public getConnectionTimeout(): number;
			public setEnableGzip(param0: boolean): void;
			public setCurlLogging(param0: boolean): void;
			public withProxyUsername(param0: string): com.amazonaws.ClientConfiguration;
			public withProxyHost(param0: string): com.amazonaws.ClientConfiguration;
			public getProxyWorkstation(): string;
			public setTrustManager(param0: javax.net.ssl.TrustManager): void;
			public setProxyPassword(param0: string): void;
			public withSignerOverride(param0: string): com.amazonaws.ClientConfiguration;
			public setPreemptiveBasicProxyAuth(param0: java.lang.Boolean): void;
			public constructor(param0: com.amazonaws.ClientConfiguration);
			/** @deprecated */
			public withProxyWorkstation(param0: string): com.amazonaws.ClientConfiguration;
			public withLocalAddress(param0: java.net.InetAddress): com.amazonaws.ClientConfiguration;
			public getRetryPolicy(): com.amazonaws.retry.RetryPolicy;
			public withTrustManager(param0: javax.net.ssl.TrustManager): com.amazonaws.ClientConfiguration;
			public getProtocol(): com.amazonaws.Protocol;
			public setSocketTimeout(param0: number): void;
		}
	}
}

declare module com {
	export module amazonaws {
		export class DefaultRequest<T>  extends com.amazonaws.Request<any> {
			public static class: java.lang.Class<com.amazonaws.DefaultRequest<any>>;
			public getTimeOffset(): number;
			public getHttpMethod(): com.amazonaws.http.HttpMethodName;
			public getServiceName(): string;
			public getAWSRequestMetrics(): com.amazonaws.util.AWSRequestMetrics;
			public withParameter(param0: string, param1: string): com.amazonaws.Request<any>;
			public getOriginalRequest(): com.amazonaws.AmazonWebServiceRequest;
			public getParameters(): java.util.Map<string,string>;
			public withTimeOffset(param0: number): com.amazonaws.Request<any>;
			public getEndpoint(): java.net.URI;
			public setContent(param0: java.io.InputStream): void;
			/** @deprecated */
			public getAWSRequestMetrics(): com.amazonaws.util.AWSRequestMetrics;
			public constructor(param0: string);
			public getContent(): java.io.InputStream;
			/** @deprecated */
			public setAWSRequestMetrics(param0: com.amazonaws.util.AWSRequestMetrics): void;
			public setEndpoint(param0: java.net.URI): void;
			public isStreaming(): boolean;
			public addHeader(param0: string, param1: string): void;
			public setHttpMethod(param0: com.amazonaws.http.HttpMethodName): void;
			public addParameter(param0: string, param1: string): void;
			public setParameters(param0: java.util.Map<string,string>): void;
			public getResourcePath(): string;
			public setTimeOffset(param0: number): void;
			public constructor(param0: com.amazonaws.AmazonWebServiceRequest, param1: string);
			public setAWSRequestMetrics(param0: com.amazonaws.util.AWSRequestMetrics): void;
			public getHeaders(): java.util.Map<string,string>;
			public toString(): string;
			public setHeaders(param0: java.util.Map<string,string>): void;
			public setResourcePath(param0: string): void;
			public setStreaming(param0: boolean): void;
		}
	}
}

declare module com {
	export module amazonaws {
		export class HttpMethod {
			public static class: java.lang.Class<com.amazonaws.HttpMethod>;
			public static GET: com.amazonaws.HttpMethod;
			public static POST: com.amazonaws.HttpMethod;
			public static PUT: com.amazonaws.HttpMethod;
			public static DELETE: com.amazonaws.HttpMethod;
			public static HEAD: com.amazonaws.HttpMethod;
			public static PATCH: com.amazonaws.HttpMethod;
			public static valueOf(param0: string): com.amazonaws.HttpMethod;
			public static values(): native.Array<com.amazonaws.HttpMethod>;
		}
	}
}

declare module com {
	export module amazonaws {
		export class Protocol {
			public static class: java.lang.Class<com.amazonaws.Protocol>;
			public static HTTP: com.amazonaws.Protocol;
			public static HTTPS: com.amazonaws.Protocol;
			public static valueOf(param0: string): com.amazonaws.Protocol;
			public toString(): string;
			public static values(): native.Array<com.amazonaws.Protocol>;
		}
	}
}

declare module com {
	export module amazonaws {
		export class Request<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.amazonaws.Request<any>>;
			/**
			 * Constructs a new instance of the com.amazonaws.Request<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				addHeader(param0: string, param1: string): void;
				getHeaders(): java.util.Map<string,string>;
				setHeaders(param0: java.util.Map<string,string>): void;
				setResourcePath(param0: string): void;
				getResourcePath(): string;
				addParameter(param0: string, param1: string): void;
				withParameter(param0: string, param1: string): com.amazonaws.Request<T>;
				getParameters(): java.util.Map<string,string>;
				setParameters(param0: java.util.Map<string,string>): void;
				getEndpoint(): java.net.URI;
				setEndpoint(param0: java.net.URI): void;
				getHttpMethod(): com.amazonaws.http.HttpMethodName;
				setHttpMethod(param0: com.amazonaws.http.HttpMethodName): void;
				getContent(): java.io.InputStream;
				setContent(param0: java.io.InputStream): void;
				getServiceName(): string;
				getOriginalRequest(): com.amazonaws.AmazonWebServiceRequest;
				getTimeOffset(): number;
				setTimeOffset(param0: number): void;
				withTimeOffset(param0: number): com.amazonaws.Request<T>;
				getAWSRequestMetrics(): com.amazonaws.util.AWSRequestMetrics;
				setAWSRequestMetrics(param0: com.amazonaws.util.AWSRequestMetrics): void;
				isStreaming(): boolean;
				setStreaming(param0: boolean): void;
			});
			public constructor();
			public setEndpoint(param0: java.net.URI): void;
			public isStreaming(): boolean;
			public getTimeOffset(): number;
			public addHeader(param0: string, param1: string): void;
			public setHttpMethod(param0: com.amazonaws.http.HttpMethodName): void;
			public addParameter(param0: string, param1: string): void;
			public withParameter(param0: string, param1: string): com.amazonaws.Request<T>;
			public setParameters(param0: java.util.Map<string,string>): void;
			public getHttpMethod(): com.amazonaws.http.HttpMethodName;
			public getServiceName(): string;
			public getResourcePath(): string;
			public getAWSRequestMetrics(): com.amazonaws.util.AWSRequestMetrics;
			public setTimeOffset(param0: number): void;
			public getOriginalRequest(): com.amazonaws.AmazonWebServiceRequest;
			public setAWSRequestMetrics(param0: com.amazonaws.util.AWSRequestMetrics): void;
			public getHeaders(): java.util.Map<string,string>;
			public getParameters(): java.util.Map<string,string>;
			public setHeaders(param0: java.util.Map<string,string>): void;
			public getEndpoint(): java.net.URI;
			public setContent(param0: java.io.InputStream): void;
			public setResourcePath(param0: string): void;
			public setStreaming(param0: boolean): void;
			public getContent(): java.io.InputStream;
			public withTimeOffset(param0: number): com.amazonaws.Request<T>;
		}
	}
}

declare module com {
	export module amazonaws {
		export class RequestClientOptions {
			public static class: java.lang.Class<com.amazonaws.RequestClientOptions>;
			public static DEFAULT_STREAM_BUFFER_SIZE: number;
			/** @deprecated */
			public addClientMarker(param0: string): void;
			/** @deprecated */
			public getClientMarker(): string;
			public constructor();
			public getClientMarker(param0: com.amazonaws.RequestClientOptions.Marker): string;
			public appendUserAgent(param0: string): void;
			public putClientMarker(param0: com.amazonaws.RequestClientOptions.Marker, param1: string): void;
		}
		export module RequestClientOptions {
			export class Marker {
				public static class: java.lang.Class<com.amazonaws.RequestClientOptions.Marker>;
				public static USER_AGENT: com.amazonaws.RequestClientOptions.Marker;
				public static valueOf(param0: string): com.amazonaws.RequestClientOptions.Marker;
				public static values(): native.Array<com.amazonaws.RequestClientOptions.Marker>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export class Response<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.amazonaws.Response<any>>;
			public getHttpResponse(): com.amazonaws.http.HttpResponse;
			public constructor(param0: T, param1: com.amazonaws.http.HttpResponse);
			public getAwsResponse(): T;
		}
	}
}

declare module com {
	export module amazonaws {
		export class ResponseMetadata {
			public static class: java.lang.Class<com.amazonaws.ResponseMetadata>;
			public static AWS_REQUEST_ID: string;
			public metadata: java.util.Map<string,string>;
			public constructor(param0: com.amazonaws.ResponseMetadata);
			public toString(): string;
			public getRequestId(): string;
			public constructor(param0: java.util.Map<string,string>);
		}
	}
}

declare module com {
	export module amazonaws {
		export class SDKGlobalConfiguration {
			public static class: java.lang.Class<com.amazonaws.SDKGlobalConfiguration>;
			public static DISABLE_CERT_CHECKING_SYSTEM_PROPERTY: string;
			public static DEFAULT_METRICS_SYSTEM_PROPERTY: string;
			public static ACCESS_KEY_SYSTEM_PROPERTY: string;
			public static SECRET_KEY_SYSTEM_PROPERTY: string;
			public static EC2_METADATA_SERVICE_OVERRIDE_SYSTEM_PROPERTY: string;
			public static REGIONS_FILE_OVERRIDE_SYSTEM_PROPERTY: string;
			public static DISABLE_REMOTE_REGIONS_FILE_SYSTEM_PROPERTY: string;
			public static DEFAULT_S3_STREAM_BUFFER_SIZE: string;
			public static PROFILING_SYSTEM_PROPERTY: string;
			public static ACCESS_KEY_ENV_VAR: string;
			public static ALTERNATE_ACCESS_KEY_ENV_VAR: string;
			public static SECRET_KEY_ENV_VAR: string;
			public static ALTERNATE_SECRET_KEY_ENV_VAR: string;
			public static AWS_SESSION_TOKEN_ENV_VAR: string;
			public static getGlobalTimeOffset(): number;
			public static setGlobalTimeOffset(param0: number): void;
			public constructor();
		}
	}
}

declare module com {
	export module amazonaws {
		export class ServiceNameFactory {
			public static class: java.lang.Class<com.amazonaws.ServiceNameFactory>;
			public static values(): native.Array<com.amazonaws.ServiceNameFactory>;
			public static valueOf(param0: string): com.amazonaws.ServiceNameFactory;
		}
	}
}

declare module com {
	export module amazonaws {
		export module async {
			export class Callback<R>  extends java.lang.Object {
				public static class: java.lang.Class<com.amazonaws.async.Callback<any>>;
				/**
				 * Constructs a new instance of the com.amazonaws.async.Callback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onResult(param0: R): void;
					onError(param0: java.lang.Exception): void;
				});
				public constructor();
				public onResult(param0: R): void;
				public onError(param0: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWS3Signer extends com.amazonaws.auth.AbstractAWSSigner {
				public static class: java.lang.Class<com.amazonaws.auth.AWS3Signer>;
				public sign(param0: string, param1: native.Array<number>, param2: com.amazonaws.auth.SigningAlgorithm): native.Array<number>;
				public sign(param0: native.Array<number>, param1: native.Array<number>, param2: com.amazonaws.auth.SigningAlgorithm): native.Array<number>;
				public getHeadersForStringToSign(param0: com.amazonaws.Request<any>): java.util.List<string>;
				public getCanonicalizedHeadersForStringToSign(param0: com.amazonaws.Request<any>): string;
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				public constructor();
				public addSessionCredentials(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSSessionCredentials): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWS4Signer extends com.amazonaws.auth.AbstractAWSSigner implements com.amazonaws.auth.ServiceAwareSigner, com.amazonaws.auth.RegionAwareSigner, com.amazonaws.auth.Presigner {
				public static class: java.lang.Class<com.amazonaws.auth.AWS4Signer>;
				public static ALGORITHM: string;
				public static TERMINATOR: string;
				public serviceName: string;
				public regionName: string;
				public overriddenDate: java.util.Date;
				public doubleUrlEncode: boolean;
				public static log: com.amazonaws.logging.Log;
				public sign(param0: string, param1: native.Array<number>, param2: com.amazonaws.auth.SigningAlgorithm): native.Array<number>;
				public sign(param0: native.Array<number>, param1: native.Array<number>, param2: com.amazonaws.auth.SigningAlgorithm): native.Array<number>;
				public getSignedHeadersString(param0: com.amazonaws.Request<any>): string;
				public getDateFromRequest(param0: com.amazonaws.Request<any>): number;
				public getDateStamp(param0: number): string;
				public calculateContentHash(param0: com.amazonaws.Request<any>): string;
				public constructor(param0: boolean);
				public addHostHeader(param0: com.amazonaws.Request<any>): void;
				public getCanonicalizedHeaderString(param0: com.amazonaws.Request<any>): string;
				public getScope(param0: com.amazonaws.Request<any>, param1: string): string;
				public constructor();
				public processRequestPayload(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWS4Signer.HeaderSigningResult): void;
				public getStringToSign(param0: string, param1: string, param2: string, param3: string): string;
				public extractRegionName(param0: java.net.URI): string;
				public getCanonicalRequest(param0: com.amazonaws.Request<any>, param1: string): string;
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				public setRegionName(param0: string): void;
				public setServiceName(param0: string): void;
				public presignRequest(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials, param2: java.util.Date): void;
				public computeSignature(param0: com.amazonaws.Request<any>, param1: string, param2: string, param3: string, param4: string, param5: com.amazonaws.auth.AWSCredentials): com.amazonaws.auth.AWS4Signer.HeaderSigningResult;
				public extractServiceName(param0: java.net.URI): string;
				public calculateContentHashPresign(param0: com.amazonaws.Request<any>): string;
				public addSessionCredentials(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSSessionCredentials): void;
				public getTimeStamp(param0: number): string;
			}
			export module AWS4Signer {
				export class HeaderSigningResult {
					public static class: java.lang.Class<com.amazonaws.auth.AWS4Signer.HeaderSigningResult>;
					public getScope(): string;
					public getDateTime(): string;
					public getSignature(): native.Array<number>;
					public constructor(param0: string, param1: string, param2: native.Array<number>, param3: native.Array<number>);
					public getKSigning(): native.Array<number>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export abstract class AWSAbstractCognitoDeveloperIdentityProvider extends com.amazonaws.auth.AWSAbstractCognitoIdentityProvider {
				public static class: java.lang.Class<com.amazonaws.auth.AWSAbstractCognitoDeveloperIdentityProvider>;
				public getLogins(): java.util.Map<string,string>;
				public getIdentityPoolId(): string;
				/** @deprecated */
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: string, param2: com.amazonaws.regions.Regions);
				public identityChanged(param0: string): void;
				public unregisterIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public getProviderName(): string;
				/** @deprecated */
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration);
				public constructor(param0: string, param1: string, param2: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity);
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration, param3: com.amazonaws.regions.Regions);
				public clearListeners(): void;
				public getIdentityId(): string;
				public setLogins(param0: java.util.Map<string,string>): void;
				public registerIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public isAuthenticated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export abstract class AWSAbstractCognitoIdentityProvider extends com.amazonaws.auth.AWSCognitoIdentityProvider {
				public static class: java.lang.Class<com.amazonaws.auth.AWSAbstractCognitoIdentityProvider>;
				public cib: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity;
				public identityId: string;
				public token: string;
				public listeners: java.util.List<com.amazonaws.auth.IdentityChangedListener>;
				public loginsMap: java.util.Map<string,string>;
				public getLogins(): java.util.Map<string,string>;
				public getIdentityPoolId(): string;
				/** @deprecated */
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: string, param2: com.amazonaws.regions.Regions);
				public identityChanged(param0: string): void;
				public unregisterIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public refresh(): string;
				public getProviderName(): string;
				public update(param0: string, param1: string): void;
				public setToken(param0: string): void;
				public getToken(): string;
				public setIdentityId(param0: string): void;
				public appendUserAgent(param0: com.amazonaws.AmazonWebServiceRequest, param1: string): void;
				/** @deprecated */
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration);
				public constructor(param0: string, param1: string, param2: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity);
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration, param3: com.amazonaws.regions.Regions);
				public clearListeners(): void;
				public getIdentityId(): string;
				public getAccountId(): string;
				public setLogins(param0: java.util.Map<string,string>): void;
				public registerIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public isAuthenticated(): boolean;
				public getUserAgent(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSBasicCognitoIdentityProvider extends com.amazonaws.auth.AWSAbstractCognitoIdentityProvider {
				public static class: java.lang.Class<com.amazonaws.auth.AWSBasicCognitoIdentityProvider>;
				public getLogins(): java.util.Map<string,string>;
				public getIdentityPoolId(): string;
				/** @deprecated */
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: string, param2: com.amazonaws.regions.Regions);
				public identityChanged(param0: string): void;
				public refresh(): string;
				public unregisterIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public getProviderName(): string;
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration);
				/** @deprecated */
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration);
				public constructor(param0: string, param1: string, param2: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity);
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration, param3: com.amazonaws.regions.Regions);
				public clearListeners(): void;
				public getIdentityId(): string;
				public setLogins(param0: java.util.Map<string,string>): void;
				public registerIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public isAuthenticated(): boolean;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSCognitoIdentityProvider extends com.amazonaws.auth.AWSIdentityProvider {
				public static class: java.lang.Class<com.amazonaws.auth.AWSCognitoIdentityProvider>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.AWSCognitoIdentityProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getIdentityId(): string;
					getIdentityPoolId(): string;
					setLogins(param0: java.util.Map<string,string>): void;
					getLogins(): java.util.Map<string,string>;
					isAuthenticated(): boolean;
					registerIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
					unregisterIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
					identityChanged(param0: string): void;
					clearListeners(): void;
					getToken(): string;
					refresh(): string;
				});
				public constructor();
				public getLogins(): java.util.Map<string,string>;
				public getIdentityPoolId(): string;
				public clearListeners(): void;
				public identityChanged(param0: string): void;
				public unregisterIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public refresh(): string;
				public getIdentityId(): string;
				public setLogins(param0: java.util.Map<string,string>): void;
				public registerIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public isAuthenticated(): boolean;
				public getToken(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.AWSCredentials>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.AWSCredentials interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getAWSAccessKeyId(): string;
					getAWSSecretKey(): string;
				});
				public constructor();
				public getAWSSecretKey(): string;
				public getAWSAccessKeyId(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.AWSCredentialsProvider>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.AWSCredentialsProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getCredentials(): com.amazonaws.auth.AWSCredentials;
					refresh(): void;
				});
				public constructor();
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public refresh(): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSCredentialsProviderChain extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.AWSCredentialsProviderChain>;
				public constructor(param0: native.Array<com.amazonaws.auth.AWSCredentialsProvider>);
				public setReuseLastProvider(param0: boolean): void;
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public refresh(): void;
				public getReuseLastProvider(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSEnhancedCognitoIdentityProvider extends com.amazonaws.auth.AWSAbstractCognitoIdentityProvider {
				public static class: java.lang.Class<com.amazonaws.auth.AWSEnhancedCognitoIdentityProvider>;
				public getLogins(): java.util.Map<string,string>;
				public getIdentityPoolId(): string;
				/** @deprecated */
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: string, param2: com.amazonaws.regions.Regions);
				public identityChanged(param0: string): void;
				public refresh(): string;
				public unregisterIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public getProviderName(): string;
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration);
				/** @deprecated */
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration);
				public constructor(param0: string, param1: string, param2: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity);
				public constructor(param0: string, param1: string, param2: com.amazonaws.ClientConfiguration, param3: com.amazonaws.regions.Regions);
				public clearListeners(): void;
				public getIdentityId(): string;
				public setLogins(param0: java.util.Map<string,string>): void;
				public registerIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public isAuthenticated(): boolean;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSIdentityProvider {
				public static class: java.lang.Class<com.amazonaws.auth.AWSIdentityProvider>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.AWSIdentityProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getToken(): string;
					refresh(): string;
				});
				public constructor();
				public refresh(): string;
				public getToken(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSRefreshableSessionCredentials extends com.amazonaws.auth.AWSSessionCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.AWSRefreshableSessionCredentials>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.AWSRefreshableSessionCredentials interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					refreshCredentials(): void;
					getSessionToken(): string;
					getAWSAccessKeyId(): string;
					getAWSSecretKey(): string;
				});
				public constructor();
				public refreshCredentials(): void;
				public getSessionToken(): string;
				public getAWSSecretKey(): string;
				public getAWSAccessKeyId(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AWSSessionCredentials extends com.amazonaws.auth.AWSCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.AWSSessionCredentials>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.AWSSessionCredentials interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSessionToken(): string;
					getAWSAccessKeyId(): string;
					getAWSSecretKey(): string;
				});
				public constructor();
				public getSessionToken(): string;
				public getAWSSecretKey(): string;
				public getAWSAccessKeyId(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export abstract class AbstractAWSSigner extends com.amazonaws.auth.Signer {
				public static class: java.lang.Class<com.amazonaws.auth.AbstractAWSSigner>;
				public static EMPTY_STRING_SHA256_HEX: string;
				public sign(param0: native.Array<number>, param1: native.Array<number>, param2: com.amazonaws.auth.SigningAlgorithm): native.Array<number>;
				public signAndBase64Encode(param0: string, param1: string, param2: com.amazonaws.auth.SigningAlgorithm): string;
				public getCanonicalizedEndpoint(param0: java.net.URI): string;
				public getCanonicalizedQueryString(param0: java.util.Map<string,string>): string;
				public getRequestPayloadWithoutQueryParams(param0: com.amazonaws.Request<any>): string;
				public getSignatureDate(param0: number): java.util.Date;
				public constructor();
				public getBinaryRequestPayload(param0: com.amazonaws.Request<any>): native.Array<number>;
				public hash(param0: native.Array<number>): native.Array<number>;
				public getBinaryRequestPayloadStreamWithoutQueryParams(param0: com.amazonaws.Request<any>): java.io.InputStream;
				public sign(param0: string, param1: native.Array<number>, param2: com.amazonaws.auth.SigningAlgorithm): native.Array<number>;
				public hash(param0: string): native.Array<number>;
				public getBinaryRequestPayloadStream(param0: com.amazonaws.Request<any>): java.io.InputStream;
				public sanitizeCredentials(param0: com.amazonaws.auth.AWSCredentials): com.amazonaws.auth.AWSCredentials;
				public hash(param0: java.io.InputStream): native.Array<number>;
				public signAndBase64Encode(param0: native.Array<number>, param1: string, param2: com.amazonaws.auth.SigningAlgorithm): string;
				public getBinaryRequestPayloadWithoutQueryParams(param0: com.amazonaws.Request<any>): native.Array<number>;
				public getCanonicalizedQueryString(param0: com.amazonaws.Request<any>): string;
				public getCanonicalizedResourcePath(param0: string): string;
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				public getRequestPayload(param0: com.amazonaws.Request<any>): string;
				public getCanonicalizedResourcePath(param0: string, param1: boolean): string;
				public newString(param0: native.Array<number>): string;
				public getTimeOffset(param0: com.amazonaws.Request<any>): number;
				public addSessionCredentials(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSSessionCredentials): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class AnonymousAWSCredentials extends com.amazonaws.auth.AWSCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.AnonymousAWSCredentials>;
				public getAWSSecretKey(): string;
				public getAWSAccessKeyId(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class BasicAWSCredentials extends com.amazonaws.auth.AWSCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.BasicAWSCredentials>;
				public getAWSSecretKey(): string;
				public constructor(param0: string, param1: string);
				public getAWSAccessKeyId(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class BasicSessionCredentials extends com.amazonaws.auth.AWSSessionCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.BasicSessionCredentials>;
				public constructor(param0: string, param1: string, param2: string);
				public getAWSSecretKey(): string;
				public getSessionToken(): string;
				public getAWSAccessKeyId(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class ClasspathPropertiesFileCredentialsProvider extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.ClasspathPropertiesFileCredentialsProvider>;
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public refresh(): void;
				public toString(): string;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class CognitoCachingCredentialsProvider extends com.amazonaws.auth.CognitoCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.CognitoCachingCredentialsProvider>;
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: com.amazonaws.regions.Regions, param2: com.amazonaws.ClientConfiguration);
				public constructor(param0: globalAndroid.content.Context, param1: com.amazonaws.auth.AWSCognitoIdentityProvider, param2: string, param3: string);
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: string, param2: string);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: string, param5: com.amazonaws.regions.Regions, param6: com.amazonaws.ClientConfiguration);
				public constructor(param0: string, param1: com.amazonaws.regions.Regions, param2: com.amazonaws.ClientConfiguration);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: string, param5: com.amazonaws.regions.Regions);
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentityClient, param5: com.amazonaws.services.securitytoken.AWSSecurityTokenService);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: string, param3: string, param4: string, param5: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentityClient, param6: com.amazonaws.services.securitytoken.AWSSecurityTokenService);
				public constructor(param0: globalAndroid.content.Context, param1: com.amazonaws.auth.AWSCognitoIdentityProvider, param2: com.amazonaws.regions.Regions, param3: com.amazonaws.ClientConfiguration);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.amazonaws.regions.Regions, param3: com.amazonaws.ClientConfiguration);
				public clear(): void;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.amazonaws.regions.Regions);
				public constructor(param0: globalAndroid.content.Context, param1: com.amazonaws.auth.AWSCognitoIdentityProvider, param2: string, param3: string, param4: com.amazonaws.services.securitytoken.AWSSecurityTokenService);
				public constructor(param0: globalAndroid.content.Context, param1: com.amazonaws.auth.AWSCognitoIdentityProvider, param2: com.amazonaws.regions.Regions);
				public getCredentials(): com.amazonaws.auth.AWSSessionCredentials;
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: string, param2: string, param3: com.amazonaws.services.securitytoken.AWSSecurityTokenService);
				public constructor(param0: globalAndroid.content.Context, param1: com.amazonaws.mobile.config.AWSConfiguration);
				public constructor(param0: com.amazonaws.mobile.config.AWSConfiguration);
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: com.amazonaws.regions.Regions);
				public clearCredentials(): void;
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentityClient);
				public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.amazonaws.regions.Regions);
				public constructor(param0: string, param1: com.amazonaws.regions.Regions);
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public getCachedIdentityId(): string;
				public refresh(): void;
				public setPersistenceEnabled(param0: boolean): void;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.amazonaws.regions.Regions, param5: com.amazonaws.ClientConfiguration);
				public getIdentityId(): string;
				public setLogins(param0: java.util.Map<string,string>): void;
				public getUserAgent(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class CognitoCredentialsProvider extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.CognitoCredentialsProvider>;
				public static DEFAULT_DURATION_SECONDS: number;
				public static DEFAULT_THRESHOLD_SECONDS: number;
				public sessionCredentials: com.amazonaws.auth.AWSSessionCredentials;
				public sessionCredentialsExpiration: java.util.Date;
				public token: string;
				public securityTokenService: com.amazonaws.services.securitytoken.AWSSecurityTokenService;
				public sessionDuration: number;
				public refreshThreshold: number;
				public unauthRoleArn: string;
				public authRoleArn: string;
				public customRoleArn: string;
				public useEnhancedFlow: boolean;
				public credentialsLock: java.util.concurrent.locks.ReentrantReadWriteLock;
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: com.amazonaws.regions.Regions, param2: com.amazonaws.ClientConfiguration);
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: string, param2: string);
				public getSessionDuration(): number;
				public constructor(param0: string, param1: com.amazonaws.regions.Regions, param2: com.amazonaws.ClientConfiguration);
				public getLoginsKey(): string;
				public withLogins(param0: java.util.Map<string,string>): com.amazonaws.auth.AWSCredentialsProvider;
				public unregisterIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public setSessionCredentialsExpiration(param0: java.util.Date): void;
				public withSessionDuration(param0: number): com.amazonaws.auth.CognitoCredentialsProvider;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentityClient, param5: com.amazonaws.services.securitytoken.AWSSecurityTokenService);
				public getIdentityProvider(): com.amazonaws.auth.AWSIdentityProvider;
				public clear(): void;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.amazonaws.regions.Regions);
				public getCredentials(): com.amazonaws.auth.AWSSessionCredentials;
				public startSession(): void;
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: string, param2: string, param3: com.amazonaws.services.securitytoken.AWSSecurityTokenService);
				public registerIdentityChangedListener(param0: com.amazonaws.auth.IdentityChangedListener): void;
				public setCustomRoleArn(param0: string): void;
				public constructor(param0: com.amazonaws.mobile.config.AWSConfiguration);
				public withRefreshThreshold(param0: number): com.amazonaws.auth.CognitoCredentialsProvider;
				public getCustomRoleArn(): string;
				public getLogins(): java.util.Map<string,string>;
				public setSessionDuration(param0: number): void;
				public getIdentityPoolId(): string;
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: com.amazonaws.regions.Regions);
				public clearCredentials(): void;
				public constructor(param0: com.amazonaws.auth.AWSCognitoIdentityProvider, param1: com.amazonaws.services.cognitoidentity.AmazonCognitoIdentityClient);
				public needsNewSession(): boolean;
				public getSessionCredentitalsExpiration(): java.util.Date;
				public constructor(param0: string, param1: com.amazonaws.regions.Regions);
				public getToken(): string;
				public setIdentityId(param0: string): void;
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public setRefreshThreshold(param0: number): void;
				public refresh(): void;
				public constructor(param0: string, param1: string, param2: string, param3: string, param4: com.amazonaws.regions.Regions, param5: com.amazonaws.ClientConfiguration);
				public getIdentityId(): string;
				public getRefreshThreshold(): number;
				public setLogins(param0: java.util.Map<string,string>): void;
				public getUserAgent(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class DefaultAWSCredentialsProviderChain extends com.amazonaws.auth.AWSCredentialsProviderChain {
				public static class: java.lang.Class<com.amazonaws.auth.DefaultAWSCredentialsProviderChain>;
				public constructor(param0: native.Array<com.amazonaws.auth.AWSCredentialsProvider>);
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public refresh(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class IdentityChangedListener {
				public static class: java.lang.Class<com.amazonaws.auth.IdentityChangedListener>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.IdentityChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					identityChanged(param0: string, param1: string): void;
				});
				public constructor();
				public identityChanged(param0: string, param1: string): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class NoOpSigner extends com.amazonaws.auth.Signer {
				public static class: java.lang.Class<com.amazonaws.auth.NoOpSigner>;
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class NoSessionSupportCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.NoSessionSupportCredentials>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.NoSessionSupportCredentials interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class Presigner {
				public static class: java.lang.Class<com.amazonaws.auth.Presigner>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.Presigner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					presignRequest(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials, param2: java.util.Date): void;
				});
				public constructor();
				public presignRequest(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials, param2: java.util.Date): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class PropertiesCredentials extends com.amazonaws.auth.AWSCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.PropertiesCredentials>;
				public constructor(param0: java.io.File);
				public getAWSSecretKey(): string;
				public constructor(param0: java.io.InputStream);
				public getAWSAccessKeyId(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class PropertiesFileCredentialsProvider extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.PropertiesFileCredentialsProvider>;
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public refresh(): void;
				public toString(): string;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class QueryStringSigner extends com.amazonaws.auth.AbstractAWSSigner implements com.amazonaws.auth.Signer {
				public static class: java.lang.Class<com.amazonaws.auth.QueryStringSigner>;
				public sign(param0: string, param1: native.Array<number>, param2: com.amazonaws.auth.SigningAlgorithm): native.Array<number>;
				public sign(param0: native.Array<number>, param1: native.Array<number>, param2: com.amazonaws.auth.SigningAlgorithm): native.Array<number>;
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.SignatureVersion, param2: com.amazonaws.auth.SigningAlgorithm, param3: com.amazonaws.auth.AWSCredentials): void;
				public constructor();
				public addSessionCredentials(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSSessionCredentials): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class RegionAwareSigner extends com.amazonaws.auth.Signer {
				public static class: java.lang.Class<com.amazonaws.auth.RegionAwareSigner>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.RegionAwareSigner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setRegionName(param0: string): void;
					sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				});
				public constructor();
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				public setRegionName(param0: string): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class STSAssumeRoleSessionCredentialsProvider extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.STSAssumeRoleSessionCredentialsProvider>;
				public static DEFAULT_DURATION_SECONDS: number;
				public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: string, param2: string, param3: com.amazonaws.ClientConfiguration);
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: string, param2: string);
				public refresh(): void;
				public setSTSClientEndpoint(param0: string): void;
				public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: string, param2: string);
				public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: string, param2: string, param3: com.amazonaws.ClientConfiguration);
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class STSSessionCredentials extends com.amazonaws.auth.AWSRefreshableSessionCredentials {
				public static class: java.lang.Class<com.amazonaws.auth.STSSessionCredentials>;
				public static DEFAULT_DURATION_SECONDS: number;
				public getImmutableCredentials(): com.amazonaws.auth.AWSSessionCredentials;
				public constructor(param0: com.amazonaws.auth.AWSCredentials);
				public constructor(param0: com.amazonaws.services.securitytoken.AWSSecurityTokenService);
				public refreshCredentials(): void;
				public getAWSSecretKey(): string;
				public getSessionToken(): string;
				public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: number);
				public constructor(param0: com.amazonaws.services.securitytoken.AWSSecurityTokenService, param1: number);
				public getAWSAccessKeyId(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class STSSessionCredentialsProvider extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.STSSessionCredentialsProvider>;
				public static DEFAULT_DURATION_SECONDS: number;
				public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider);
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public constructor(param0: com.amazonaws.auth.AWSCredentials);
				public refresh(): void;
				public setSTSClientEndpoint(param0: string): void;
				public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: com.amazonaws.ClientConfiguration);
				public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class ServiceAwareSigner extends com.amazonaws.auth.Signer {
				public static class: java.lang.Class<com.amazonaws.auth.ServiceAwareSigner>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.ServiceAwareSigner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setServiceName(param0: string): void;
					sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				});
				public constructor();
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				public setServiceName(param0: string): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class SessionCredentialsProviderFactory {
				public static class: java.lang.Class<com.amazonaws.auth.SessionCredentialsProviderFactory>;
				public static getSessionCredentialsProvider(param0: com.amazonaws.auth.AWSCredentials, param1: string, param2: com.amazonaws.ClientConfiguration): com.amazonaws.auth.STSSessionCredentialsProvider;
				public constructor();
			}
			export module SessionCredentialsProviderFactory {
				export class Key {
					public static class: java.lang.Class<com.amazonaws.auth.SessionCredentialsProviderFactory.Key>;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class SignatureVersion {
				public static class: java.lang.Class<com.amazonaws.auth.SignatureVersion>;
				public static V1: com.amazonaws.auth.SignatureVersion;
				public static V2: com.amazonaws.auth.SignatureVersion;
				public toString(): string;
				public static values(): native.Array<com.amazonaws.auth.SignatureVersion>;
				public static valueOf(param0: string): com.amazonaws.auth.SignatureVersion;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class Signer {
				public static class: java.lang.Class<com.amazonaws.auth.Signer>;
				/**
				 * Constructs a new instance of the com.amazonaws.auth.Signer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
				});
				public constructor();
				public sign(param0: com.amazonaws.Request<any>, param1: com.amazonaws.auth.AWSCredentials): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class SignerFactory {
				public static class: java.lang.Class<com.amazonaws.auth.SignerFactory>;
				public static registerSigner(param0: string, param1: java.lang.Class<any>): void;
				public static getSigner(param0: string, param1: string): com.amazonaws.auth.Signer;
				public static getSignerByTypeAndService(param0: string, param1: string): com.amazonaws.auth.Signer;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class SigningAlgorithm {
				public static class: java.lang.Class<com.amazonaws.auth.SigningAlgorithm>;
				public static HmacSHA1: com.amazonaws.auth.SigningAlgorithm;
				public static HmacSHA256: com.amazonaws.auth.SigningAlgorithm;
				public static values(): native.Array<com.amazonaws.auth.SigningAlgorithm>;
				public static valueOf(param0: string): com.amazonaws.auth.SigningAlgorithm;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class SystemPropertiesCredentialsProvider extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.SystemPropertiesCredentialsProvider>;
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public refresh(): void;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export class WebIdentityFederationSessionCredentialsProvider extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.auth.WebIdentityFederationSessionCredentialsProvider>;
				public static DEFAULT_DURATION_SECONDS: number;
				public static DEFAULT_THRESHOLD_SECONDS: number;
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public setSessionDuration(param0: number): void;
				public withRefreshThreshold(param0: number): com.amazonaws.auth.WebIdentityFederationSessionCredentialsProvider;
				public constructor(param0: string, param1: string, param2: string, param3: com.amazonaws.services.securitytoken.AWSSecurityTokenService);
				public withSessionDuration(param0: number): com.amazonaws.auth.WebIdentityFederationSessionCredentialsProvider;
				public setRefreshThreshold(param0: number): void;
				public constructor(param0: string, param1: string, param2: string, param3: com.amazonaws.ClientConfiguration);
				public getSessionDuration(): number;
				public getSubjectFromWIF(): string;
				public refresh(): void;
				public constructor(param0: string, param1: string, param2: string);
				public getRefreshThreshold(): number;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export class Action {
					public static class: java.lang.Class<com.amazonaws.auth.policy.Action>;
					/**
					 * Constructs a new instance of the com.amazonaws.auth.policy.Action interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getActionName(): string;
					});
					public constructor();
					public getActionName(): string;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export class Condition {
					public static class: java.lang.Class<com.amazonaws.auth.policy.Condition>;
					public type: string;
					public conditionKey: string;
					public values: java.util.List<string>;
					public withValues(param0: java.util.List<string>): com.amazonaws.auth.policy.Condition;
					public constructor();
					public setValues(param0: java.util.List<string>): void;
					public withValues(param0: native.Array<string>): com.amazonaws.auth.policy.Condition;
					public setType(param0: string): void;
					public withType(param0: string): com.amazonaws.auth.policy.Condition;
					public getConditionKey(): string;
					public withConditionKey(param0: string): com.amazonaws.auth.policy.Condition;
					public getType(): string;
					public setConditionKey(param0: string): void;
					public getValues(): java.util.List<string>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export class Policy {
					public static class: java.lang.Class<com.amazonaws.auth.policy.Policy>;
					public toJson(): string;
					public getVersion(): string;
					public getId(): string;
					public constructor(param0: string);
					public constructor();
					public constructor(param0: string, param1: java.util.Collection<com.amazonaws.auth.policy.Statement>);
					public getStatements(): java.util.Collection<com.amazonaws.auth.policy.Statement>;
					public static fromJson(param0: string): com.amazonaws.auth.policy.Policy;
					public withStatements(param0: native.Array<com.amazonaws.auth.policy.Statement>): com.amazonaws.auth.policy.Policy;
					public withId(param0: string): com.amazonaws.auth.policy.Policy;
					public setId(param0: string): void;
					public setStatements(param0: java.util.Collection<com.amazonaws.auth.policy.Statement>): void;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export class Principal {
					public static class: java.lang.Class<com.amazonaws.auth.policy.Principal>;
					public static AllUsers: com.amazonaws.auth.policy.Principal;
					public static AllServices: com.amazonaws.auth.policy.Principal;
					public static AllWebProviders: com.amazonaws.auth.policy.Principal;
					public static All: com.amazonaws.auth.policy.Principal;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public getId(): string;
					public constructor(param0: string);
					public constructor(param0: com.amazonaws.auth.policy.Principal.WebIdentityProviders);
					public constructor(param0: com.amazonaws.auth.policy.Principal.Services);
					public hashCode(): number;
					public getProvider(): string;
				}
				export module Principal {
					export class Services {
						public static class: java.lang.Class<com.amazonaws.auth.policy.Principal.Services>;
						public static AWSDataPipeline: com.amazonaws.auth.policy.Principal.Services;
						public static AmazonElasticTranscoder: com.amazonaws.auth.policy.Principal.Services;
						public static AmazonEC2: com.amazonaws.auth.policy.Principal.Services;
						public static AWSOpsWorks: com.amazonaws.auth.policy.Principal.Services;
						public static AWSCloudHSM: com.amazonaws.auth.policy.Principal.Services;
						public static AllServices: com.amazonaws.auth.policy.Principal.Services;
						public static fromString(param0: string): com.amazonaws.auth.policy.Principal.Services;
						public static values(): native.Array<com.amazonaws.auth.policy.Principal.Services>;
						public static valueOf(param0: string): com.amazonaws.auth.policy.Principal.Services;
						public getServiceId(): string;
					}
					export class WebIdentityProviders {
						public static class: java.lang.Class<com.amazonaws.auth.policy.Principal.WebIdentityProviders>;
						public static Facebook: com.amazonaws.auth.policy.Principal.WebIdentityProviders;
						public static Google: com.amazonaws.auth.policy.Principal.WebIdentityProviders;
						public static Amazon: com.amazonaws.auth.policy.Principal.WebIdentityProviders;
						public static AllProviders: com.amazonaws.auth.policy.Principal.WebIdentityProviders;
						public static valueOf(param0: string): com.amazonaws.auth.policy.Principal.WebIdentityProviders;
						public static fromString(param0: string): com.amazonaws.auth.policy.Principal.WebIdentityProviders;
						public static values(): native.Array<com.amazonaws.auth.policy.Principal.WebIdentityProviders>;
						public getWebIdentityProvider(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export class Resource {
					public static class: java.lang.Class<com.amazonaws.auth.policy.Resource>;
					public getId(): string;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export class STSActions extends com.amazonaws.auth.policy.Action {
					public static class: java.lang.Class<com.amazonaws.auth.policy.STSActions>;
					public static AssumeRole: com.amazonaws.auth.policy.STSActions;
					public static AssumeRoleWithWebIdentity: com.amazonaws.auth.policy.STSActions;
					public getActionName(): string;
					public static valueOf(param0: string): com.amazonaws.auth.policy.STSActions;
					public static values(): native.Array<com.amazonaws.auth.policy.STSActions>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export class Statement {
					public static class: java.lang.Class<com.amazonaws.auth.policy.Statement>;
					public getActions(): java.util.List<com.amazonaws.auth.policy.Action>;
					public getId(): string;
					public withId(param0: string): com.amazonaws.auth.policy.Statement;
					public getConditions(): java.util.List<com.amazonaws.auth.policy.Condition>;
					public getResources(): java.util.List<com.amazonaws.auth.policy.Resource>;
					public withActions(param0: native.Array<com.amazonaws.auth.policy.Action>): com.amazonaws.auth.policy.Statement;
					public constructor(param0: com.amazonaws.auth.policy.Statement.Effect);
					public setEffect(param0: com.amazonaws.auth.policy.Statement.Effect): void;
					public withResources(param0: native.Array<com.amazonaws.auth.policy.Resource>): com.amazonaws.auth.policy.Statement;
					public setPrincipals(param0: java.util.Collection<com.amazonaws.auth.policy.Principal>): void;
					public withPrincipals(param0: native.Array<com.amazonaws.auth.policy.Principal>): com.amazonaws.auth.policy.Statement;
					public getPrincipals(): java.util.List<com.amazonaws.auth.policy.Principal>;
					public setPrincipals(param0: native.Array<com.amazonaws.auth.policy.Principal>): void;
					public getEffect(): com.amazonaws.auth.policy.Statement.Effect;
					public setResources(param0: java.util.Collection<com.amazonaws.auth.policy.Resource>): void;
					public setConditions(param0: java.util.List<com.amazonaws.auth.policy.Condition>): void;
					public setId(param0: string): void;
					public setActions(param0: java.util.Collection<com.amazonaws.auth.policy.Action>): void;
					public withConditions(param0: native.Array<com.amazonaws.auth.policy.Condition>): com.amazonaws.auth.policy.Statement;
				}
				export module Statement {
					export class Effect {
						public static class: java.lang.Class<com.amazonaws.auth.policy.Statement.Effect>;
						public static Allow: com.amazonaws.auth.policy.Statement.Effect;
						public static Deny: com.amazonaws.auth.policy.Statement.Effect;
						public static valueOf(param0: string): com.amazonaws.auth.policy.Statement.Effect;
						public static values(): native.Array<com.amazonaws.auth.policy.Statement.Effect>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module actions {
					export class SecurityTokenServiceActions extends com.amazonaws.auth.policy.Action {
						public static class: java.lang.Class<com.amazonaws.auth.policy.actions.SecurityTokenServiceActions>;
						public static AllSecurityTokenServiceActions: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static AssumeRole: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static AssumeRoleWithSAML: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static AssumeRoleWithWebIdentity: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static DecodeAuthorizationMessage: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static GetAccessKeyInfo: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static GetCallerIdentity: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static GetFederationToken: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static GetSessionToken: com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
						public static values(): native.Array<com.amazonaws.auth.policy.actions.SecurityTokenServiceActions>;
						public getActionName(): string;
						public static valueOf(param0: string): com.amazonaws.auth.policy.actions.SecurityTokenServiceActions;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module conditions {
					export class ArnCondition extends com.amazonaws.auth.policy.Condition {
						public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.ArnCondition>;
						public constructor();
						public constructor(param0: com.amazonaws.auth.policy.conditions.ArnCondition.ArnComparisonType, param1: string, param2: string);
					}
					export module ArnCondition {
						export class ArnComparisonType {
							public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.ArnCondition.ArnComparisonType>;
							public static ArnEquals: com.amazonaws.auth.policy.conditions.ArnCondition.ArnComparisonType;
							public static ArnLike: com.amazonaws.auth.policy.conditions.ArnCondition.ArnComparisonType;
							public static ArnNotEquals: com.amazonaws.auth.policy.conditions.ArnCondition.ArnComparisonType;
							public static ArnNotLike: com.amazonaws.auth.policy.conditions.ArnCondition.ArnComparisonType;
							public static valueOf(param0: string): com.amazonaws.auth.policy.conditions.ArnCondition.ArnComparisonType;
							public static values(): native.Array<com.amazonaws.auth.policy.conditions.ArnCondition.ArnComparisonType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module conditions {
					export class BooleanCondition extends com.amazonaws.auth.policy.Condition {
						public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.BooleanCondition>;
						public constructor();
						public constructor(param0: string, param1: boolean);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module conditions {
					export class ConditionFactory {
						public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.ConditionFactory>;
						public static CURRENT_TIME_CONDITION_KEY: string;
						public static SECURE_TRANSPORT_CONDITION_KEY: string;
						public static SOURCE_IP_CONDITION_KEY: string;
						public static USER_AGENT_CONDITION_KEY: string;
						public static EPOCH_TIME_CONDITION_KEY: string;
						public static REFERER_CONDITION_KEY: string;
						public static SOURCE_ARN_CONDITION_KEY: string;
						public static newSecureTransportCondition(): com.amazonaws.auth.policy.Condition;
						public static newSourceArnCondition(param0: string): com.amazonaws.auth.policy.Condition;
						public static newRefererCondition(param0: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType, param1: string): com.amazonaws.auth.policy.Condition;
						public static newUserAgentCondition(param0: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType, param1: string): com.amazonaws.auth.policy.Condition;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module conditions {
					export class DateCondition extends com.amazonaws.auth.policy.Condition {
						public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.DateCondition>;
						public constructor();
						public constructor(param0: com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType, param1: java.util.Date);
					}
					export module DateCondition {
						export class DateComparisonType {
							public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType>;
							public static DateEquals: com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType;
							public static DateGreaterThan: com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType;
							public static DateGreaterThanEquals: com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType;
							public static DateLessThan: com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType;
							public static DateLessThanEquals: com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType;
							public static DateNotEquals: com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType;
							public static valueOf(param0: string): com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType;
							public static values(): native.Array<com.amazonaws.auth.policy.conditions.DateCondition.DateComparisonType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module conditions {
					export class IpAddressCondition extends com.amazonaws.auth.policy.Condition {
						public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.IpAddressCondition>;
						public constructor();
						public constructor(param0: com.amazonaws.auth.policy.conditions.IpAddressCondition.IpAddressComparisonType, param1: string);
						public constructor(param0: string);
					}
					export module IpAddressCondition {
						export class IpAddressComparisonType {
							public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.IpAddressCondition.IpAddressComparisonType>;
							public static IpAddress: com.amazonaws.auth.policy.conditions.IpAddressCondition.IpAddressComparisonType;
							public static NotIpAddress: com.amazonaws.auth.policy.conditions.IpAddressCondition.IpAddressComparisonType;
							public static values(): native.Array<com.amazonaws.auth.policy.conditions.IpAddressCondition.IpAddressComparisonType>;
							public static valueOf(param0: string): com.amazonaws.auth.policy.conditions.IpAddressCondition.IpAddressComparisonType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module conditions {
					export class NumericCondition extends com.amazonaws.auth.policy.Condition {
						public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.NumericCondition>;
						public constructor();
						public constructor(param0: com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType, param1: string, param2: string);
					}
					export module NumericCondition {
						export class NumericComparisonType {
							public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType>;
							public static NumericEquals: com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType;
							public static NumericGreaterThan: com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType;
							public static NumericGreaterThanEquals: com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType;
							public static NumericLessThan: com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType;
							public static NumericLessThanEquals: com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType;
							public static NumericNotEquals: com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType;
							public static values(): native.Array<com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType>;
							public static valueOf(param0: string): com.amazonaws.auth.policy.conditions.NumericCondition.NumericComparisonType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module conditions {
					export class StringCondition extends com.amazonaws.auth.policy.Condition {
						public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.StringCondition>;
						public constructor();
						public constructor(param0: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType, param1: string, param2: string);
					}
					export module StringCondition {
						export class StringComparisonType {
							public static class: java.lang.Class<com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType>;
							public static StringEquals: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType;
							public static StringEqualsIgnoreCase: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType;
							public static StringLike: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType;
							public static StringNotEquals: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType;
							public static StringNotEqualsIgnoreCase: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType;
							public static StringNotLike: com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType;
							public static valueOf(param0: string): com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType;
							public static values(): native.Array<com.amazonaws.auth.policy.conditions.StringCondition.StringComparisonType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module internal {
					export class JsonDocumentFields {
						public static class: java.lang.Class<com.amazonaws.auth.policy.internal.JsonDocumentFields>;
						public static VERSION: string;
						public static POLICY_ID: string;
						public static STATEMENT: string;
						public static STATEMENT_EFFECT: string;
						public static EFFECT_VALUE_ALLOW: string;
						public static STATEMENT_ID: string;
						public static PRINCIPAL: string;
						public static ACTION: string;
						public static RESOURCE: string;
						public static CONDITION: string;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module internal {
					export class JsonPolicyReader {
						public static class: java.lang.Class<com.amazonaws.auth.policy.internal.JsonPolicyReader>;
						public constructor();
						public createPolicyFromJsonString(param0: string): com.amazonaws.auth.policy.Policy;
					}
					export module JsonPolicyReader {
						export class NamedAction extends com.amazonaws.auth.policy.Action {
							public static class: java.lang.Class<com.amazonaws.auth.policy.internal.JsonPolicyReader.NamedAction>;
							public constructor(param0: string);
							public getActionName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module auth {
			export module policy {
				export module internal {
					export class JsonPolicyWriter {
						public static class: java.lang.Class<com.amazonaws.auth.policy.internal.JsonPolicyWriter>;
						public constructor();
						public writePolicyToString(param0: com.amazonaws.auth.policy.Policy): string;
					}
					export module JsonPolicyWriter {
						export class ConditionsByKey {
							public static class: java.lang.Class<com.amazonaws.auth.policy.internal.JsonPolicyWriter.ConditionsByKey>;
							public constructor();
							public addValuesToKey(param0: string, param1: java.util.List<string>): void;
							public setConditionsByKey(param0: java.util.Map<string,java.util.List<string>>): void;
							public getConditionsByKey(param0: string): java.util.List<string>;
							public keySet(): java.util.Set<string>;
							public getConditionsByKey(): java.util.Map<string,java.util.List<string>>;
							public containsKey(param0: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module event {
			export class ProgressEvent {
				public static class: java.lang.Class<com.amazonaws.event.ProgressEvent>;
				public static PREPARING_EVENT_CODE: number;
				public static STARTED_EVENT_CODE: number;
				public static COMPLETED_EVENT_CODE: number;
				public static FAILED_EVENT_CODE: number;
				public static CANCELED_EVENT_CODE: number;
				public static RESET_EVENT_CODE: number;
				public static PART_STARTED_EVENT_CODE: number;
				public static PART_COMPLETED_EVENT_CODE: number;
				public static PART_FAILED_EVENT_CODE: number;
				public bytesTransferred: number;
				public eventCode: number;
				public constructor(param0: number, param1: number);
				public setBytesTransferred(param0: number): void;
				public getEventCode(): number;
				public constructor(param0: number);
				public setEventCode(param0: number): void;
				public getBytesTransferred(): number;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module event {
			export class ProgressListener {
				public static class: java.lang.Class<com.amazonaws.event.ProgressListener>;
				/**
				 * Constructs a new instance of the com.amazonaws.event.ProgressListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					progressChanged(param0: com.amazonaws.event.ProgressEvent): void;
				});
				public constructor();
				public progressChanged(param0: com.amazonaws.event.ProgressEvent): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module event {
			export class ProgressListenerCallbackExecutor {
				public static class: java.lang.Class<com.amazonaws.event.ProgressListenerCallbackExecutor>;
				public static wrapListener(param0: com.amazonaws.event.ProgressListener): com.amazonaws.event.ProgressListenerCallbackExecutor;
				public getListener(): com.amazonaws.event.ProgressListener;
				public static getExecutorService(): java.util.concurrent.ExecutorService;
				public constructor(param0: com.amazonaws.event.ProgressListener);
				public progressChanged(param0: com.amazonaws.event.ProgressEvent): void;
				public static progressChanged(param0: com.amazonaws.event.ProgressListener, param1: com.amazonaws.event.ProgressEvent): java.util.concurrent.Future<any>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module event {
			export class ProgressListenerChain extends com.amazonaws.event.ProgressListener {
				public static class: java.lang.Class<com.amazonaws.event.ProgressListenerChain>;
				public removeProgressListener(param0: com.amazonaws.event.ProgressListener): void;
				public constructor(param0: native.Array<com.amazonaws.event.ProgressListener>);
				public constructor(param0: com.amazonaws.event.ProgressListenerChain.ProgressEventFilter, param1: native.Array<com.amazonaws.event.ProgressListener>);
				public progressChanged(param0: com.amazonaws.event.ProgressEvent): void;
				public addProgressListener(param0: com.amazonaws.event.ProgressListener): void;
				public getListeners(): java.util.List<com.amazonaws.event.ProgressListener>;
			}
			export module ProgressListenerChain {
				export class ProgressEventFilter {
					public static class: java.lang.Class<com.amazonaws.event.ProgressListenerChain.ProgressEventFilter>;
					/**
					 * Constructs a new instance of the com.amazonaws.event.ProgressListenerChain$ProgressEventFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						filter(param0: com.amazonaws.event.ProgressEvent): com.amazonaws.event.ProgressEvent;
					});
					public constructor();
					public filter(param0: com.amazonaws.event.ProgressEvent): com.amazonaws.event.ProgressEvent;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module event {
			export class ProgressReportingInputStream extends com.amazonaws.internal.SdkFilterInputStream {
				public static class: java.lang.Class<com.amazonaws.event.ProgressReportingInputStream>;
				public getFireCompletedEvent(): boolean;
				public reset(): void;
				public read(): number;
				public close(): void;
				public constructor(param0: java.io.InputStream, param1: com.amazonaws.event.ProgressListenerCallbackExecutor);
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public setNotificationThreshold(param0: number): void;
				public setFireCompletedEvent(param0: boolean): void;
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module handlers {
			export abstract class AbstractRequestHandler extends com.amazonaws.handlers.RequestHandler {
				public static class: java.lang.Class<com.amazonaws.handlers.AbstractRequestHandler>;
				public afterResponse(param0: com.amazonaws.Request<any>, param1: any, param2: com.amazonaws.util.TimingInfo): void;
				public beforeRequest(param0: com.amazonaws.Request<any>): void;
				public constructor();
				public afterError(param0: com.amazonaws.Request<any>, param1: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module handlers {
			export class AsyncHandler<REQUEST, RESULT>  extends java.lang.Object {
				public static class: java.lang.Class<com.amazonaws.handlers.AsyncHandler<any,any>>;
				/**
				 * Constructs a new instance of the com.amazonaws.handlers.AsyncHandler<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onError(param0: java.lang.Exception): void;
					onSuccess(param0: REQUEST, param1: RESULT): void;
				});
				public constructor();
				public onSuccess(param0: REQUEST, param1: RESULT): void;
				public onError(param0: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module handlers {
			export abstract class CredentialsRequestHandler extends com.amazonaws.handlers.RequestHandler2 {
				public static class: java.lang.Class<com.amazonaws.handlers.CredentialsRequestHandler>;
				public awsCredentials: com.amazonaws.auth.AWSCredentials;
				public setCredentials(param0: com.amazonaws.auth.AWSCredentials): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module handlers {
			export class HandlerChainFactory {
				public static class: java.lang.Class<com.amazonaws.handlers.HandlerChainFactory>;
				public newRequestHandler2Chain(param0: string): java.util.List<com.amazonaws.handlers.RequestHandler2>;
				public newRequestHandlerChain(param0: string): java.util.List<com.amazonaws.handlers.RequestHandler2>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module handlers {
			export class RequestHandler {
				public static class: java.lang.Class<com.amazonaws.handlers.RequestHandler>;
				/**
				 * Constructs a new instance of the com.amazonaws.handlers.RequestHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					beforeRequest(param0: com.amazonaws.Request<any>): void;
					afterResponse(param0: com.amazonaws.Request<any>, param1: any, param2: com.amazonaws.util.TimingInfo): void;
					afterError(param0: com.amazonaws.Request<any>, param1: java.lang.Exception): void;
				});
				public constructor();
				public afterResponse(param0: com.amazonaws.Request<any>, param1: any, param2: com.amazonaws.util.TimingInfo): void;
				public beforeRequest(param0: com.amazonaws.Request<any>): void;
				public afterError(param0: com.amazonaws.Request<any>, param1: java.lang.Exception): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module handlers {
			export abstract class RequestHandler2 {
				public static class: java.lang.Class<com.amazonaws.handlers.RequestHandler2>;
				public afterError(param0: com.amazonaws.Request<any>, param1: com.amazonaws.Response<any>, param2: java.lang.Exception): void;
				public static adapt(param0: com.amazonaws.handlers.RequestHandler): com.amazonaws.handlers.RequestHandler2;
				public beforeRequest(param0: com.amazonaws.Request<any>): void;
				public afterResponse(param0: com.amazonaws.Request<any>, param1: com.amazonaws.Response<any>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module handlers {
			export class RequestHandler2Adaptor extends com.amazonaws.handlers.RequestHandler2 {
				public static class: java.lang.Class<com.amazonaws.handlers.RequestHandler2Adaptor>;
				public afterError(param0: com.amazonaws.Request<any>, param1: com.amazonaws.Response<any>, param2: java.lang.Exception): void;
				public hashCode(): number;
				public beforeRequest(param0: com.amazonaws.Request<any>): void;
				public afterResponse(param0: com.amazonaws.Request<any>, param1: com.amazonaws.Response<any>): void;
				public equals(param0: any): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class AmazonHttpClient {
				public static class: java.lang.Class<com.amazonaws.http.AmazonHttpClient>;
				public shutdown(): void;
				public getRequestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
				public constructor(param0: com.amazonaws.ClientConfiguration);
				/** @deprecated */
				public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.metrics.RequestMetricCollector);
				public finalize(): void;
				public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.http.HttpClient);
				/** @deprecated */
				public getResponseMetadataForRequest(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
				/** @deprecated */
				public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.http.HttpClient, param2: com.amazonaws.metrics.RequestMetricCollector);
				public execute(param0: com.amazonaws.Request<any>, param1: com.amazonaws.http.HttpResponseHandler<any>, param2: com.amazonaws.http.HttpResponseHandler<any>, param3: com.amazonaws.http.ExecutionContext): com.amazonaws.Response<any>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class ApacheHttpClient extends com.amazonaws.http.HttpClient {
				public static class: java.lang.Class<com.amazonaws.http.ApacheHttpClient>;
				public execute(param0: com.amazonaws.http.HttpRequest): com.amazonaws.http.HttpResponse;
				public shutdown(): void;
				public constructor(param0: com.amazonaws.ClientConfiguration);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class ConnectionManagerFactory {
				public static class: java.lang.Class<com.amazonaws.http.ConnectionManagerFactory>;
				public static createThreadSafeClientConnManager(param0: com.amazonaws.ClientConfiguration, param1: org.apache.http.params.HttpParams): org.apache.http.impl.conn.tsccm.ThreadSafeClientConnManager;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class DefaultErrorResponseHandler extends com.amazonaws.http.HttpResponseHandler<com.amazonaws.AmazonServiceException> {
				public static class: java.lang.Class<com.amazonaws.http.DefaultErrorResponseHandler>;
				public needsConnectionLeftOpen(): boolean;
				public constructor(param0: java.util.List<com.amazonaws.transform.Unmarshaller<com.amazonaws.AmazonServiceException,org.w3c.dom.Node>>);
				public handle(param0: com.amazonaws.http.HttpResponse): any;
				public handle(param0: com.amazonaws.http.HttpResponse): com.amazonaws.AmazonServiceException;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class ExecutionContext {
				public static class: java.lang.Class<com.amazonaws.http.ExecutionContext>;
				public constructor(param0: java.util.List<com.amazonaws.handlers.RequestHandler2>, param1: boolean, param2: com.amazonaws.AmazonWebServiceClient);
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public setSigner(param0: com.amazonaws.auth.Signer): void;
				public getContextUserAgent(): string;
				public getRequestHandler2s(): java.util.List<com.amazonaws.handlers.RequestHandler2>;
				/** @deprecated */
				public constructor(param0: boolean);
				/** @deprecated */
				public getAwsRequestMetrics(): com.amazonaws.util.AWSRequestMetrics;
				public getSignerByURI(param0: java.net.URI): com.amazonaws.auth.Signer;
				public setCredentials(param0: com.amazonaws.auth.AWSCredentials): void;
				public setContextUserAgent(param0: string): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpClient {
				public static class: java.lang.Class<com.amazonaws.http.HttpClient>;
				/**
				 * Constructs a new instance of the com.amazonaws.http.HttpClient interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					execute(param0: com.amazonaws.http.HttpRequest): com.amazonaws.http.HttpResponse;
					shutdown(): void;
				});
				public constructor();
				public execute(param0: com.amazonaws.http.HttpRequest): com.amazonaws.http.HttpResponse;
				public shutdown(): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpClientFactory {
				public static class: java.lang.Class<com.amazonaws.http.HttpClientFactory>;
				public createHttpClient(param0: com.amazonaws.ClientConfiguration): org.apache.http.client.HttpClient;
			}
			export module HttpClientFactory {
				export class LocationHeaderNotRequiredRedirectHandler {
					public static class: java.lang.Class<com.amazonaws.http.HttpClientFactory.LocationHeaderNotRequiredRedirectHandler>;
					public isRedirectRequested(param0: org.apache.http.HttpResponse, param1: org.apache.http.protocol.HttpContext): boolean;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpHeader {
				public static class: java.lang.Class<com.amazonaws.http.HttpHeader>;
				public static ACCEPT: string;
				public static AUTHORIZATION: string;
				public static CONTENT_LENGTH: string;
				public static CONTENT_TYPE: string;
				public static DATE: string;
				public static EXPECT: string;
				public static HOST: string;
				public static LOCATION: string;
				public static USER_AGENT: string;
				public static X_AMZ_CONTENT_SHA256: string;
				public static X_AMZ_DATE: string;
				public static X_AMZ_NONCE: string;
				public static X_AMZ_SECURITY_TOKEN: string;
				public static X_AMZN_AUTHORIZATION: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpMethodName {
				public static class: java.lang.Class<com.amazonaws.http.HttpMethodName>;
				public static GET: com.amazonaws.http.HttpMethodName;
				public static POST: com.amazonaws.http.HttpMethodName;
				public static PUT: com.amazonaws.http.HttpMethodName;
				public static DELETE: com.amazonaws.http.HttpMethodName;
				public static HEAD: com.amazonaws.http.HttpMethodName;
				public static PATCH: com.amazonaws.http.HttpMethodName;
				public static valueOf(param0: string): com.amazonaws.http.HttpMethodName;
				public static values(): native.Array<com.amazonaws.http.HttpMethodName>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpMethodReleaseInputStream extends com.amazonaws.internal.SdkInputStream {
				public static class: java.lang.Class<com.amazonaws.http.HttpMethodReleaseInputStream>;
				public getHttpRequest(): org.apache.http.HttpEntityEnclosingRequest;
				public read(): number;
				public close(): void;
				public constructor(param0: org.apache.http.HttpEntityEnclosingRequest);
				public available(): number;
				public finalize(): void;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public getWrappedInputStream(): java.io.InputStream;
				/** @deprecated */
				public isMetricActivated(): boolean;
				public constructor();
				public releaseConnection(): void;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpRequest {
				public static class: java.lang.Class<com.amazonaws.http.HttpRequest>;
				public getMethod(): string;
				public constructor(param0: string, param1: java.net.URI, param2: java.util.Map<string,string>, param3: java.io.InputStream);
				public getHeaders(): java.util.Map<string,string>;
				public getUri(): java.net.URI;
				public getContentLength(): number;
				public setStreaming(param0: boolean): void;
				public getContent(): java.io.InputStream;
				public constructor(param0: string, param1: java.net.URI);
				public isStreaming(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpRequestFactory {
				public static class: java.lang.Class<com.amazonaws.http.HttpRequestFactory>;
				public createHttpRequest(param0: com.amazonaws.Request<any>, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.http.ExecutionContext): com.amazonaws.http.HttpRequest;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpResponse {
				public static class: java.lang.Class<com.amazonaws.http.HttpResponse>;
				public getStatusCode(): number;
				public getHeaders(): java.util.Map<string,string>;
				public getRawContent(): java.io.InputStream;
				public static builder(): com.amazonaws.http.HttpResponse.Builder;
				public getStatusText(): string;
				public getContent(): java.io.InputStream;
			}
			export module HttpResponse {
				export class Builder {
					public static class: java.lang.Class<com.amazonaws.http.HttpResponse.Builder>;
					public statusText(param0: string): com.amazonaws.http.HttpResponse.Builder;
					public build(): com.amazonaws.http.HttpResponse;
					public constructor();
					public content(param0: java.io.InputStream): com.amazonaws.http.HttpResponse.Builder;
					public statusCode(param0: number): com.amazonaws.http.HttpResponse.Builder;
					public header(param0: string, param1: string): com.amazonaws.http.HttpResponse.Builder;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class HttpResponseHandler<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.amazonaws.http.HttpResponseHandler<any>>;
				/**
				 * Constructs a new instance of the com.amazonaws.http.HttpResponseHandler<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					handle(param0: com.amazonaws.http.HttpResponse): T;
					needsConnectionLeftOpen(): boolean;
				});
				public constructor();
				public needsConnectionLeftOpen(): boolean;
				public handle(param0: com.amazonaws.http.HttpResponse): T;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class IdleConnectionReaper {
				public static class: java.lang.Class<com.amazonaws.http.IdleConnectionReaper>;
				public static registerConnectionManager(param0: org.apache.http.conn.ClientConnectionManager): boolean;
				public run(): void;
				public static shutdown(): boolean;
				public static removeConnectionManager(param0: org.apache.http.conn.ClientConnectionManager): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class JsonErrorResponseHandler extends com.amazonaws.http.HttpResponseHandler<com.amazonaws.AmazonServiceException> {
				public static class: java.lang.Class<com.amazonaws.http.JsonErrorResponseHandler>;
				public needsConnectionLeftOpen(): boolean;
				public handle(param0: com.amazonaws.http.HttpResponse): any;
				public constructor(param0: java.util.List<any>);
				public handle(param0: com.amazonaws.http.HttpResponse): com.amazonaws.AmazonServiceException;
			}
			export module JsonErrorResponseHandler {
				export class JsonErrorResponse {
					public static class: java.lang.Class<com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse>;
					public getStatusCode(): number;
					public getMessage(): string;
					public getErrorCode(): string;
					public get(param0: string): string;
					public static fromResponse(param0: com.amazonaws.http.HttpResponse): com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class JsonResponseHandler<T>  extends com.amazonaws.http.HttpResponseHandler<com.amazonaws.AmazonWebServiceResponse<any>> {
				public static class: java.lang.Class<com.amazonaws.http.JsonResponseHandler<any>>;
				public needsConnectionLeftOpen(): boolean;
				public handle(param0: com.amazonaws.http.HttpResponse): com.amazonaws.AmazonWebServiceResponse<any>;
				public handle(param0: com.amazonaws.http.HttpResponse): any;
				public constructor(param0: com.amazonaws.transform.Unmarshaller<any,com.amazonaws.transform.JsonUnmarshallerContext>);
				/** @deprecated */
				public registerAdditionalMetadataExpressions(param0: com.amazonaws.transform.JsonUnmarshallerContext): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class RepeatableInputStreamRequestEntity {
				public static class: java.lang.Class<com.amazonaws.http.RepeatableInputStreamRequestEntity>;
				public writeTo(param0: java.io.OutputStream): void;
				public isChunked(): boolean;
				public isRepeatable(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class StaxResponseHandler<T>  extends com.amazonaws.http.HttpResponseHandler<com.amazonaws.AmazonWebServiceResponse<any>> {
				public static class: java.lang.Class<com.amazonaws.http.StaxResponseHandler<any>>;
				public needsConnectionLeftOpen(): boolean;
				public handle(param0: com.amazonaws.http.HttpResponse): com.amazonaws.AmazonWebServiceResponse<any>;
				public handle(param0: com.amazonaws.http.HttpResponse): any;
				public constructor(param0: com.amazonaws.transform.Unmarshaller<any,com.amazonaws.transform.StaxUnmarshallerContext>);
				public registerAdditionalMetadataExpressions(param0: com.amazonaws.transform.StaxUnmarshallerContext): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export class UrlHttpClient extends com.amazonaws.http.HttpClient {
				public static class: java.lang.Class<com.amazonaws.http.UrlHttpClient>;
				public execute(param0: com.amazonaws.http.HttpRequest): com.amazonaws.http.HttpResponse;
				public shutdown(): void;
				public constructor(param0: com.amazonaws.ClientConfiguration);
				public printToLog(param0: string): void;
				public getUrlConnection(param0: java.net.URL): java.net.HttpURLConnection;
			}
			export module UrlHttpClient {
				export class CurlBuilder {
					public static class: java.lang.Class<com.amazonaws.http.UrlHttpClient.CurlBuilder>;
					public build(): string;
					public constructor(param0: com.amazonaws.http.UrlHttpClient, param1: java.net.URL);
					public setContentOverflow(param0: boolean): com.amazonaws.http.UrlHttpClient.CurlBuilder;
					public isValid(): boolean;
					public setMethod(param0: string): com.amazonaws.http.UrlHttpClient.CurlBuilder;
					public setHeaders(param0: java.util.Map<string,string>): com.amazonaws.http.UrlHttpClient.CurlBuilder;
					public setContent(param0: string): com.amazonaws.http.UrlHttpClient.CurlBuilder;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export module conn {
				export class ClientConnectionManagerFactory {
					public static class: java.lang.Class<com.amazonaws.http.conn.ClientConnectionManagerFactory>;
					public static wrap(param0: org.apache.http.conn.ClientConnectionManager): org.apache.http.conn.ClientConnectionManager;
					public constructor();
				}
				export module ClientConnectionManagerFactory {
					export class Handler {
						public static class: java.lang.Class<com.amazonaws.http.conn.ClientConnectionManagerFactory.Handler>;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export module conn {
				export class ClientConnectionRequestFactory {
					public static class: java.lang.Class<com.amazonaws.http.conn.ClientConnectionRequestFactory>;
				}
				export module ClientConnectionRequestFactory {
					export class Handler {
						public static class: java.lang.Class<com.amazonaws.http.conn.ClientConnectionRequestFactory.Handler>;
						public invoke(param0: any, param1: java.lang.reflect.Method, param2: native.Array<any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export module conn {
				export class Wrapped {
					public static class: java.lang.Class<com.amazonaws.http.conn.Wrapped>;
					/**
					 * Constructs a new instance of the com.amazonaws.http.conn.Wrapped interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export module impl {
				export module client {
					export class HttpRequestNoRetryHandler {
						public static class: java.lang.Class<com.amazonaws.http.impl.client.HttpRequestNoRetryHandler>;
						public static Singleton: com.amazonaws.http.impl.client.HttpRequestNoRetryHandler;
						public retryRequest(param0: java.io.IOException, param1: number, param2: org.apache.http.protocol.HttpContext): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export module impl {
				export module client {
					export class SdkHttpClient {
						public static class: java.lang.Class<com.amazonaws.http.impl.client.SdkHttpClient>;
						public createRequestExecutor(): org.apache.http.protocol.HttpRequestExecutor;
						public constructor(param0: org.apache.http.conn.ClientConnectionManager, param1: org.apache.http.params.HttpParams);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export module impl {
				export module client {
					export class SdkHttpRequestRetryHandler {
						public static class: java.lang.Class<com.amazonaws.http.impl.client.SdkHttpRequestRetryHandler>;
						public static Singleton: com.amazonaws.http.impl.client.SdkHttpRequestRetryHandler;
						public retryRequest(param0: java.io.IOException, param1: number, param2: org.apache.http.protocol.HttpContext): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module http {
			export module protocol {
				export class SdkHttpRequestExecutor {
					public static class: java.lang.Class<com.amazonaws.http.protocol.SdkHttpRequestExecutor>;
					public doReceiveResponse(param0: org.apache.http.HttpRequest, param1: org.apache.http.HttpClientConnection, param2: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
					public constructor();
					public doSendRequest(param0: org.apache.http.HttpRequest, param1: org.apache.http.HttpClientConnection, param2: org.apache.http.protocol.HttpContext): org.apache.http.HttpResponse;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class CRC32MismatchException {
				public static class: java.lang.Class<com.amazonaws.internal.CRC32MismatchException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export abstract class CustomBackoffStrategy {
				public static class: java.lang.Class<com.amazonaws.internal.CustomBackoffStrategy>;
				public getBackoffPeriod(param0: number): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class DynamoDBBackoffStrategy extends com.amazonaws.internal.CustomBackoffStrategy {
				public static class: java.lang.Class<com.amazonaws.internal.DynamoDBBackoffStrategy>;
				public static DEFAULT: com.amazonaws.internal.CustomBackoffStrategy;
				public getBackoffPeriod(param0: number): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class ListWithAutoConstructFlag<T>  extends java.util.ArrayList<any> {
				public static class: java.lang.Class<com.amazonaws.internal.ListWithAutoConstructFlag<any>>;
				public setAutoConstruct(param0: boolean): void;
				public constructor(param0: java.util.Collection<any>);
				public constructor(param0: number);
				public isAutoConstruct(): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class MetricAware {
				public static class: java.lang.Class<com.amazonaws.internal.MetricAware>;
				/**
				 * Constructs a new instance of the com.amazonaws.internal.MetricAware interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isMetricActivated(): boolean;
				});
				public constructor();
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class Releasable {
				public static class: java.lang.Class<com.amazonaws.internal.Releasable>;
				/**
				 * Constructs a new instance of the com.amazonaws.internal.Releasable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					release(): void;
				});
				public constructor();
				public release(): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class ReleasableInputStream extends com.amazonaws.internal.SdkFilterInputStream implements com.amazonaws.internal.Releasable {
				public static class: java.lang.Class<com.amazonaws.internal.ReleasableInputStream>;
				public static wrap(param0: java.io.InputStream): com.amazonaws.internal.ReleasableInputStream;
				public close(): void;
				public disableClose(): com.amazonaws.internal.ReleasableInputStream;
				public release(): void;
				public isCloseDisabled(): boolean;
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class ResettableInputStream extends com.amazonaws.internal.ReleasableInputStream {
				public static class: java.lang.Class<com.amazonaws.internal.ResettableInputStream>;
				public markSupported(): boolean;
				public release(): void;
				public constructor(param0: java.io.File);
				public constructor(param0: java.io.FileInputStream);
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public static newResettableInputStream(param0: java.io.File, param1: string): com.amazonaws.internal.ResettableInputStream;
				public constructor(param0: java.io.InputStream);
				public static newResettableInputStream(param0: java.io.FileInputStream): com.amazonaws.internal.ResettableInputStream;
				/** @deprecated */
				public isMetricActivated(): boolean;
				public static newResettableInputStream(param0: java.io.FileInputStream, param1: string): com.amazonaws.internal.ResettableInputStream;
				public reset(): void;
				public read(): number;
				public skip(param0: number): number;
				public static newResettableInputStream(param0: java.io.File): com.amazonaws.internal.ResettableInputStream;
				public available(): number;
				public getFile(): java.io.File;
				public mark(param0: number): void;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export abstract class ReturningRunnable<R>  extends java.lang.Object {
				public static class: java.lang.Class<com.amazonaws.internal.ReturningRunnable<any>>;
				public await(): R;
				public async(param0: com.amazonaws.async.Callback<R>): void;
				public run(): R;
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class SdkDigestInputStream implements com.amazonaws.internal.MetricAware {
				public static class: java.lang.Class<com.amazonaws.internal.SdkDigestInputStream>;
				public skip(param0: number): number;
				public constructor(param0: java.io.InputStream, param1: java.security.MessageDigest);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class SdkFilterInputStream implements com.amazonaws.internal.MetricAware {
				public static class: java.lang.Class<com.amazonaws.internal.SdkFilterInputStream>;
				public markSupported(): boolean;
				public close(): void;
				public abortIfNeeded(): void;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public abort(): void;
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public reset(): void;
				public read(): number;
				public skip(param0: number): number;
				public available(): number;
				public mark(param0: number): void;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class SdkFilterOutputStream implements com.amazonaws.internal.MetricAware {
				public static class: java.lang.Class<com.amazonaws.internal.SdkFilterOutputStream>;
				public constructor(param0: java.io.OutputStream);
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export abstract class SdkInputStream implements com.amazonaws.internal.MetricAware {
				public static class: java.lang.Class<com.amazonaws.internal.SdkInputStream>;
				public abortIfNeeded(): void;
				public getWrappedInputStream(): java.io.InputStream;
				public abort(): void;
				/** @deprecated */
				public isMetricActivated(): boolean;
				public constructor();
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export class StaticCredentialsProvider extends com.amazonaws.auth.AWSCredentialsProvider {
				public static class: java.lang.Class<com.amazonaws.internal.StaticCredentialsProvider>;
				public getCredentials(): com.amazonaws.auth.AWSCredentials;
				public constructor(param0: com.amazonaws.auth.AWSCredentials);
				public refresh(): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module config {
				export class HostRegexToRegionMapping {
					public static class: java.lang.Class<com.amazonaws.internal.config.HostRegexToRegionMapping>;
					public constructor(param0: string, param1: string);
					public getHostNameRegex(): string;
					public getRegionName(): string;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module config {
				export class HttpClientConfig {
					public static class: java.lang.Class<com.amazonaws.internal.config.HttpClientConfig>;
					public toString(): string;
					public getServiceName(): string;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module config {
				export class InternalConfig {
					public static class: java.lang.Class<com.amazonaws.internal.config.InternalConfig>;
					public getSignerConfig(param0: string): com.amazonaws.internal.config.SignerConfig;
					public getHttpClientConfig(param0: string): com.amazonaws.internal.config.HttpClientConfig;
					public getSignerConfig(param0: string, param1: string): com.amazonaws.internal.config.SignerConfig;
					public getHostRegexToRegionMappings(): java.util.List<com.amazonaws.internal.config.HostRegexToRegionMapping>;
				}
				export module InternalConfig {
					export class Factory {
						public static class: java.lang.Class<com.amazonaws.internal.config.InternalConfig.Factory>;
						public constructor();
						public static getInternalConfig(): com.amazonaws.internal.config.InternalConfig;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module config {
				export class SignerConfig {
					public static class: java.lang.Class<com.amazonaws.internal.config.SignerConfig>;
					public toString(): string;
					public getSignerType(): string;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module keyvaluestore {
				export class AWSKeyValueStore {
					public static class: java.lang.Class<com.amazonaws.internal.keyvaluestore.AWSKeyValueStore>;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: boolean);
					public remove(param0: string): void;
					public put(param0: string, param1: string): void;
					public clear(): void;
					public setPersistenceEnabled(param0: boolean): void;
					public contains(param0: string): boolean;
					public get(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module keyvaluestore {
				export class KeyNotFoundException {
					public static class: java.lang.Class<com.amazonaws.internal.keyvaluestore.KeyNotFoundException>;
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module keyvaluestore {
				export class KeyNotGeneratedException {
					public static class: java.lang.Class<com.amazonaws.internal.keyvaluestore.KeyNotGeneratedException>;
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module keyvaluestore {
				export class KeyProvider {
					public static class: java.lang.Class<com.amazonaws.internal.keyvaluestore.KeyProvider>;
					/**
					 * Constructs a new instance of the com.amazonaws.internal.keyvaluestore.KeyProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						generateKey(param0: string): java.security.Key;
						retrieveKey(param0: string): java.security.Key;
						deleteKey(param0: string): void;
					});
					public constructor();
					public deleteKey(param0: string): void;
					public generateKey(param0: string): java.security.Key;
					public retrieveKey(param0: string): java.security.Key;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module keyvaluestore {
				export class KeyProvider10 extends com.amazonaws.internal.keyvaluestore.KeyProvider {
					public static class: java.lang.Class<com.amazonaws.internal.keyvaluestore.KeyProvider10>;
					public deleteKey(param0: string): void;
					public generateKey(param0: string): java.security.Key;
					public retrieveKey(param0: string): java.security.Key;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module keyvaluestore {
				export class KeyProvider18 extends com.amazonaws.internal.keyvaluestore.KeyProvider {
					public static class: java.lang.Class<com.amazonaws.internal.keyvaluestore.KeyProvider18>;
					public deleteKey(param0: string): void;
					public generateKey(param0: string): java.security.Key;
					public retrieveKey(param0: string): java.security.Key;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module internal {
			export module keyvaluestore {
				export class KeyProvider23 extends com.amazonaws.internal.keyvaluestore.KeyProvider {
					public static class: java.lang.Class<com.amazonaws.internal.keyvaluestore.KeyProvider23>;
					public deleteKey(param0: string): void;
					public generateKey(param0: string): java.security.Key;
					public retrieveKey(param0: string): java.security.Key;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module logging {
			export class AndroidLog extends com.amazonaws.logging.Log {
				public static class: java.lang.Class<com.amazonaws.logging.AndroidLog>;
				public trace(param0: any, param1: java.lang.Throwable): void;
				public warn(param0: any, param1: java.lang.Throwable): void;
				public isInfoEnabled(): boolean;
				public trace(param0: any): void;
				public isWarnEnabled(): boolean;
				public error(param0: any): void;
				public constructor(param0: string);
				public isErrorEnabled(): boolean;
				public debug(param0: any, param1: java.lang.Throwable): void;
				public isDebugEnabled(): boolean;
				public debug(param0: any): void;
				public setLevel(param0: com.amazonaws.logging.LogFactory.Level): void;
				public info(param0: any): void;
				public isTraceEnabled(): boolean;
				public warn(param0: any): void;
				public error(param0: any, param1: java.lang.Throwable): void;
				public info(param0: any, param1: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module logging {
			export class ApacheCommonsLogging extends com.amazonaws.logging.Log {
				public static class: java.lang.Class<com.amazonaws.logging.ApacheCommonsLogging>;
				public trace(param0: any, param1: java.lang.Throwable): void;
				public warn(param0: any, param1: java.lang.Throwable): void;
				public isInfoEnabled(): boolean;
				public trace(param0: any): void;
				public isWarnEnabled(): boolean;
				public error(param0: any): void;
				public constructor(param0: string);
				public constructor(param0: java.lang.Class);
				public isErrorEnabled(): boolean;
				public debug(param0: any, param1: java.lang.Throwable): void;
				public isDebugEnabled(): boolean;
				public debug(param0: any): void;
				public setLevel(param0: com.amazonaws.logging.LogFactory.Level): void;
				public info(param0: any): void;
				public isTraceEnabled(): boolean;
				public warn(param0: any): void;
				public error(param0: any, param1: java.lang.Throwable): void;
				public info(param0: any, param1: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module logging {
			export class Log {
				public static class: java.lang.Class<com.amazonaws.logging.Log>;
				/**
				 * Constructs a new instance of the com.amazonaws.logging.Log interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isDebugEnabled(): boolean;
					isErrorEnabled(): boolean;
					isInfoEnabled(): boolean;
					isTraceEnabled(): boolean;
					isWarnEnabled(): boolean;
					trace(param0: any): void;
					trace(param0: any, param1: java.lang.Throwable): void;
					debug(param0: any): void;
					debug(param0: any, param1: java.lang.Throwable): void;
					info(param0: any): void;
					info(param0: any, param1: java.lang.Throwable): void;
					warn(param0: any): void;
					warn(param0: any, param1: java.lang.Throwable): void;
					error(param0: any): void;
					error(param0: any, param1: java.lang.Throwable): void;
					setLevel(param0: com.amazonaws.logging.LogFactory.Level): void;
				});
				public constructor();
				public trace(param0: any, param1: java.lang.Throwable): void;
				public warn(param0: any, param1: java.lang.Throwable): void;
				public isInfoEnabled(): boolean;
				public trace(param0: any): void;
				public isWarnEnabled(): boolean;
				public error(param0: any): void;
				public isErrorEnabled(): boolean;
				public debug(param0: any, param1: java.lang.Throwable): void;
				public isDebugEnabled(): boolean;
				public debug(param0: any): void;
				public setLevel(param0: com.amazonaws.logging.LogFactory.Level): void;
				public info(param0: any): void;
				public isTraceEnabled(): boolean;
				public warn(param0: any): void;
				public error(param0: any, param1: java.lang.Throwable): void;
				public info(param0: any, param1: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module logging {
			export class LogFactory {
				public static class: java.lang.Class<com.amazonaws.logging.LogFactory>;
				public static getLevel(): com.amazonaws.logging.LogFactory.Level;
				public static getLog(param0: java.lang.Class): com.amazonaws.logging.Log;
				public static getLog(param0: string): com.amazonaws.logging.Log;
				public static setLevel(param0: com.amazonaws.logging.LogFactory.Level): void;
				public constructor();
			}
			export module LogFactory {
				export class Level {
					public static class: java.lang.Class<com.amazonaws.logging.LogFactory.Level>;
					public static ALL: com.amazonaws.logging.LogFactory.Level;
					public static TRACE: com.amazonaws.logging.LogFactory.Level;
					public static DEBUG: com.amazonaws.logging.LogFactory.Level;
					public static INFO: com.amazonaws.logging.LogFactory.Level;
					public static WARN: com.amazonaws.logging.LogFactory.Level;
					public static ERROR: com.amazonaws.logging.LogFactory.Level;
					public static OFF: com.amazonaws.logging.LogFactory.Level;
					public static values(): native.Array<com.amazonaws.logging.LogFactory.Level>;
					public getValue(): number;
					public static valueOf(param0: string): com.amazonaws.logging.LogFactory.Level;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class AwsSdkMetrics {
				public static class: java.lang.Class<com.amazonaws.metrics.AwsSdkMetrics>;
				public static DEFAULT_METRIC_NAMESPACE: string;
				public static USE_SINGLE_METRIC_NAMESPACE: string;
				public static EXCLUDE_MACHINE_METRICS: string;
				public static INCLUDE_PER_HOST_METRICS: string;
				public static AWS_CREDENTAIL_PROPERTIES_FILE: string;
				public static CLOUDWATCH_REGION: string;
				public static METRIC_QUEUE_SIZE: string;
				public static QUEUE_POLL_TIMEOUT_MILLI: string;
				public static METRIC_NAME_SPACE: string;
				public static JVM_METRIC_NAME: string;
				public static HOST_METRIC_NAME: string;
				public static getMetricCollector(): com.amazonaws.metrics.MetricCollector;
				public static getQueuePollTimeoutMilli(): java.lang.Long;
				public static setPerHostMetricsIncluded(param0: boolean): void;
				public static getPredefinedMetrics(): java.util.Set<com.amazonaws.metrics.MetricType>;
				public static addAll(param0: java.util.Collection): boolean;
				public static setCredentialFile(param0: string): void;
				public static setMetricNameSpace(param0: string): void;
				public static setMetricCollector(param0: com.amazonaws.metrics.MetricCollector): void;
				public static setMetricQueueSize(param0: java.lang.Integer): void;
				public static setCredentialProvider(param0: com.amazonaws.auth.AWSCredentialsProvider): void;
				public static getMetricNameSpace(): string;
				public static isMetricsEnabled(): boolean;
				public static valueOf(param0: string): com.amazonaws.metrics.AwsSdkMetrics;
				public static isDefaultMetricsEnabled(): boolean;
				public static setSingleMetricNamespace(param0: boolean): void;
				public static set(param0: java.util.Collection): void;
				public static setMachineMetricsExcluded(param0: boolean): void;
				public static isPerHostMetricEnabled(): boolean;
				public static remove(param0: com.amazonaws.metrics.MetricType): boolean;
				public static setJvmMetricName(param0: string): void;
				public static add(param0: com.amazonaws.metrics.MetricType): boolean;
				public static getJvmMetricName(): string;
				public static isSingleMetricNamespace(): boolean;
				public static getHostMetricName(): string;
				public static enableDefaultMetrics(): boolean;
				public static getRegion(): com.amazonaws.regions.Regions;
				public static values(): native.Array<com.amazonaws.metrics.AwsSdkMetrics>;
				public static setQueuePollTimeoutMilli(param0: java.lang.Long): void;
				public static getMetricQueueSize(): java.lang.Integer;
				public static setRegion(param0: com.amazonaws.regions.Regions): void;
				public static getServiceMetricCollector(): com.amazonaws.metrics.ServiceMetricCollector;
				public static disableMetrics(): void;
				public static isPerHostMetricIncluded(): boolean;
				public static getCredentailFile(): string;
				public static getCredentialProvider(): com.amazonaws.auth.AWSCredentialsProvider;
				public static getRequestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
				public static setHostMetricName(param0: string): void;
				public static isMachineMetricExcluded(): boolean;
			}
			export module AwsSdkMetrics {
				export class MetricRegistry {
					public static class: java.lang.Class<com.amazonaws.metrics.AwsSdkMetrics.MetricRegistry>;
					public predefinedMetrics(): java.util.Set<com.amazonaws.metrics.MetricType>;
					public setMetricTypes(param0: java.util.Collection): void;
					public removeMetricType(param0: com.amazonaws.metrics.MetricType): boolean;
					public addMetricTypes(param0: java.util.Collection): boolean;
					public addMetricType(param0: com.amazonaws.metrics.MetricType): boolean;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class ByteThroughputHelper extends com.amazonaws.metrics.ByteThroughputProvider {
				public static class: java.lang.Class<com.amazonaws.metrics.ByteThroughputHelper>;
				public increment(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export abstract class ByteThroughputProvider {
				public static class: java.lang.Class<com.amazonaws.metrics.ByteThroughputProvider>;
				public constructor(param0: com.amazonaws.metrics.ThroughputMetricType);
				public reset(): void;
				public getByteCount(): number;
				public getProviderId(): string;
				public toString(): string;
				public getThroughputMetricType(): com.amazonaws.metrics.ThroughputMetricType;
				public getDurationNano(): number;
				public increment(param0: number, param1: number): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export abstract class MetricCollector {
				public static class: java.lang.Class<com.amazonaws.metrics.MetricCollector>;
				public static NONE: com.amazonaws.metrics.MetricCollector;
				public stop(): boolean;
				public start(): boolean;
				public getRequestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
				public getServiceMetricCollector(): com.amazonaws.metrics.ServiceMetricCollector;
				public isEnabled(): boolean;
				public constructor();
			}
			export module MetricCollector {
				export class Factory {
					public static class: java.lang.Class<com.amazonaws.metrics.MetricCollector.Factory>;
					/**
					 * Constructs a new instance of the com.amazonaws.metrics.MetricCollector$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getInstance(): com.amazonaws.metrics.MetricCollector;
					});
					public constructor();
					public getInstance(): com.amazonaws.metrics.MetricCollector;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class MetricFilterInputStream extends com.amazonaws.internal.SdkFilterInputStream {
				public static class: java.lang.Class<com.amazonaws.metrics.MetricFilterInputStream>;
				public read(): number;
				public close(): void;
				public constructor(param0: com.amazonaws.metrics.ThroughputMetricType, param1: java.io.InputStream);
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class MetricInputStreamEntity {
				public static class: java.lang.Class<com.amazonaws.metrics.MetricInputStreamEntity>;
				public writeTo(param0: java.io.OutputStream): void;
				public constructor(param0: com.amazonaws.metrics.ThroughputMetricType, param1: java.io.InputStream, param2: number);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class MetricType {
				public static class: java.lang.Class<com.amazonaws.metrics.MetricType>;
				/**
				 * Constructs a new instance of the com.amazonaws.metrics.MetricType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					name(): string;
				});
				public constructor();
				public name(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export abstract class RequestMetricCollector {
				public static class: java.lang.Class<com.amazonaws.metrics.RequestMetricCollector>;
				public static NONE: com.amazonaws.metrics.RequestMetricCollector;
				public isEnabled(): boolean;
				public collectMetrics(param0: com.amazonaws.Request<any>, param1: com.amazonaws.Response<any>): void;
				public constructor();
			}
			export module RequestMetricCollector {
				export class Factory {
					public static class: java.lang.Class<com.amazonaws.metrics.RequestMetricCollector.Factory>;
					/**
					 * Constructs a new instance of the com.amazonaws.metrics.RequestMetricCollector$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getRequestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
					});
					public constructor();
					public getRequestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class RequestMetricType extends com.amazonaws.metrics.MetricType {
				public static class: java.lang.Class<com.amazonaws.metrics.RequestMetricType>;
				/**
				 * Constructs a new instance of the com.amazonaws.metrics.RequestMetricType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					name(): string;
				});
				public constructor();
				public name(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class ServiceLatencyProvider {
				public static class: java.lang.Class<com.amazonaws.metrics.ServiceLatencyProvider>;
				public getDurationMilli(): number;
				public endTiming(): com.amazonaws.metrics.ServiceLatencyProvider;
				public getProviderId(): string;
				public constructor(param0: com.amazonaws.metrics.ServiceMetricType);
				public getServiceMetricType(): com.amazonaws.metrics.ServiceMetricType;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export abstract class ServiceMetricCollector {
				public static class: java.lang.Class<com.amazonaws.metrics.ServiceMetricCollector>;
				public static NONE: com.amazonaws.metrics.ServiceMetricCollector;
				public collectByteThroughput(param0: com.amazonaws.metrics.ByteThroughputProvider): void;
				public isEnabled(): boolean;
				public constructor();
				public collectLatency(param0: com.amazonaws.metrics.ServiceLatencyProvider): void;
			}
			export module ServiceMetricCollector {
				export class Factory {
					public static class: java.lang.Class<com.amazonaws.metrics.ServiceMetricCollector.Factory>;
					/**
					 * Constructs a new instance of the com.amazonaws.metrics.ServiceMetricCollector$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getServiceMetricCollector(): com.amazonaws.metrics.ServiceMetricCollector;
					});
					public constructor();
					public getServiceMetricCollector(): com.amazonaws.metrics.ServiceMetricCollector;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class ServiceMetricType extends com.amazonaws.metrics.MetricType {
				public static class: java.lang.Class<com.amazonaws.metrics.ServiceMetricType>;
				/**
				 * Constructs a new instance of the com.amazonaws.metrics.ServiceMetricType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getServiceName(): string;
					name(): string;
				});
				public constructor();
				public static UPLOAD_THROUGHPUT_NAME_SUFFIX: string;
				public static UPLOAD_BYTE_COUNT_NAME_SUFFIX: string;
				public static DOWNLOAD_THROUGHPUT_NAME_SUFFIX: string;
				public static DOWNLOAD_BYTE_COUNT_NAME_SUFFIX: string;
				public getServiceName(): string;
				public name(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export abstract class SimpleMetricType extends com.amazonaws.metrics.MetricType {
				public static class: java.lang.Class<com.amazonaws.metrics.SimpleMetricType>;
				public name(): string;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class SimpleServiceMetricType extends com.amazonaws.metrics.SimpleMetricType implements com.amazonaws.metrics.ServiceMetricType {
				public static class: java.lang.Class<com.amazonaws.metrics.SimpleServiceMetricType>;
				public getServiceName(): string;
				public name(): string;
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class SimpleThroughputMetricType extends com.amazonaws.metrics.SimpleServiceMetricType implements com.amazonaws.metrics.ThroughputMetricType {
				public static class: java.lang.Class<com.amazonaws.metrics.SimpleThroughputMetricType>;
				public getServiceName(): string;
				public name(): string;
				public constructor(param0: string, param1: string, param2: string);
				public getByteCountMetricType(): com.amazonaws.metrics.ServiceMetricType;
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export class ThroughputMetricType extends com.amazonaws.metrics.ServiceMetricType {
				public static class: java.lang.Class<com.amazonaws.metrics.ThroughputMetricType>;
				/**
				 * Constructs a new instance of the com.amazonaws.metrics.ThroughputMetricType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getByteCountMetricType(): com.amazonaws.metrics.ServiceMetricType;
					getServiceName(): string;
					name(): string;
				});
				public constructor();
				public static UPLOAD_THROUGHPUT_NAME_SUFFIX: string;
				public static UPLOAD_BYTE_COUNT_NAME_SUFFIX: string;
				public static DOWNLOAD_THROUGHPUT_NAME_SUFFIX: string;
				public static DOWNLOAD_BYTE_COUNT_NAME_SUFFIX: string;
				public getServiceName(): string;
				public name(): string;
				public getByteCountMetricType(): com.amazonaws.metrics.ServiceMetricType;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module metrics {
			export module internal {
				export class ServiceMetricTypeGuesser {
					public static class: java.lang.Class<com.amazonaws.metrics.internal.ServiceMetricTypeGuesser>;
					public static values(): native.Array<com.amazonaws.metrics.internal.ServiceMetricTypeGuesser>;
					public static valueOf(param0: string): com.amazonaws.metrics.internal.ServiceMetricTypeGuesser;
					public static guessThroughputMetricType(param0: com.amazonaws.Request<any>, param1: string, param2: string): com.amazonaws.metrics.ThroughputMetricType;
				}
			}
		}
	}
}


declare module com {
	export module amazonaws {
		export module mobile {
			export module config {
				export class AWSConfigurable {
					public static class: java.lang.Class<com.amazonaws.mobile.config.AWSConfigurable>;
					/**
					 * Constructs a new instance of the com.amazonaws.mobile.config.AWSConfigurable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						initialize(param0: globalAndroid.content.Context): com.amazonaws.mobile.config.AWSConfigurable;
						initialize(param0: globalAndroid.content.Context, param1: com.amazonaws.mobile.config.AWSConfiguration): com.amazonaws.mobile.config.AWSConfigurable;
						initialize(param0: globalAndroid.content.Context, param1: com.amazonaws.mobile.config.AWSConfiguration, param2: com.amazonaws.ClientConfiguration): com.amazonaws.mobile.config.AWSConfigurable;
					});
					public constructor();
					public initialize(param0: globalAndroid.content.Context): com.amazonaws.mobile.config.AWSConfigurable;
					public initialize(param0: globalAndroid.content.Context, param1: com.amazonaws.mobile.config.AWSConfiguration): com.amazonaws.mobile.config.AWSConfigurable;
					public initialize(param0: globalAndroid.content.Context, param1: com.amazonaws.mobile.config.AWSConfiguration, param2: com.amazonaws.ClientConfiguration): com.amazonaws.mobile.config.AWSConfigurable;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobile {
			export module config {
				export class AWSConfiguration {
					public static class: java.lang.Class<com.amazonaws.mobile.config.AWSConfiguration>;
					public constructor(param0: globalAndroid.content.Context);
					public toString(): string;
					public constructor(param0: org.json.JSONObject);
					public constructor(param0: globalAndroid.content.Context, param1: number);
					public constructor(param0: org.json.JSONObject, param1: string);
					public getUserAgent(): string;
					public optJsonObject(param0: string): org.json.JSONObject;
					public getConfiguration(): string;
					public constructor(param0: globalAndroid.content.Context, param1: number, param2: string);
					public setConfiguration(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module regions {
			export class Region {
				public static class: java.lang.Class<com.amazonaws.regions.Region>;
				public hasHttpsEndpoint(param0: string): boolean;
				public createClient(param0: java.lang.Class, param1: com.amazonaws.auth.AWSCredentialsProvider, param2: com.amazonaws.ClientConfiguration): com.amazonaws.AmazonWebServiceClient;
				public hasHttpEndpoint(param0: string): boolean;
				public hashCode(): number;
				public static getRegion(param0: string): com.amazonaws.regions.Region;
				public equals(param0: any): boolean;
				public static getRegion(param0: com.amazonaws.regions.Regions): com.amazonaws.regions.Region;
				public getName(): string;
				public getDomain(): string;
				public toString(): string;
				public isServiceSupported(param0: string): boolean;
				public getServiceEndpoint(param0: string): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module regions {
			export class RegionDefaults {
				public static class: java.lang.Class<com.amazonaws.regions.RegionDefaults>;
				public static getRegions(): java.util.List<com.amazonaws.regions.Region>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module regions {
			export class RegionMetadata {
				public static class: java.lang.Class<com.amazonaws.regions.RegionMetadata>;
				public getRegions(): java.util.List<com.amazonaws.regions.Region>;
				public getRegionByEndpoint(param0: string): com.amazonaws.regions.Region;
				public getRegion(param0: string): com.amazonaws.regions.Region;
				public toString(): string;
				public getRegionsForService(param0: string): java.util.List<com.amazonaws.regions.Region>;
				public constructor(param0: java.util.List<com.amazonaws.regions.Region>);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module regions {
			export class RegionMetadataParser {
				public static class: java.lang.Class<com.amazonaws.regions.RegionMetadataParser>;
				/** @deprecated */
				public constructor();
				/** @deprecated */
				public parseRegionMetadata(param0: java.io.InputStream, param1: boolean): java.util.List<com.amazonaws.regions.Region>;
				public static parse(param0: java.io.InputStream): com.amazonaws.regions.RegionMetadata;
				/** @deprecated */
				public parseRegionMetadata(param0: java.io.InputStream): java.util.List<com.amazonaws.regions.Region>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module regions {
			export class RegionUtils {
				public static class: java.lang.Class<com.amazonaws.regions.RegionUtils>;
				public static init(): void;
				public static getRegionsForService(param0: string): java.util.List<com.amazonaws.regions.Region>;
				public static getRegionByEndpoint(param0: string): com.amazonaws.regions.Region;
				public static getRegion(param0: string): com.amazonaws.regions.Region;
				public constructor();
				public static getRegions(): java.util.List<com.amazonaws.regions.Region>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module regions {
			export class Regions {
				public static class: java.lang.Class<com.amazonaws.regions.Regions>;
				public static GovCloud: com.amazonaws.regions.Regions;
				public static US_GOV_EAST_1: com.amazonaws.regions.Regions;
				public static US_EAST_1: com.amazonaws.regions.Regions;
				public static US_EAST_2: com.amazonaws.regions.Regions;
				public static US_WEST_1: com.amazonaws.regions.Regions;
				public static US_WEST_2: com.amazonaws.regions.Regions;
				public static EU_WEST_1: com.amazonaws.regions.Regions;
				public static EU_WEST_2: com.amazonaws.regions.Regions;
				public static EU_WEST_3: com.amazonaws.regions.Regions;
				public static EU_CENTRAL_1: com.amazonaws.regions.Regions;
				public static EU_NORTH_1: com.amazonaws.regions.Regions;
				public static AP_EAST_1: com.amazonaws.regions.Regions;
				public static AP_SOUTH_1: com.amazonaws.regions.Regions;
				public static AP_SOUTHEAST_1: com.amazonaws.regions.Regions;
				public static AP_SOUTHEAST_2: com.amazonaws.regions.Regions;
				public static AP_NORTHEAST_1: com.amazonaws.regions.Regions;
				public static AP_NORTHEAST_2: com.amazonaws.regions.Regions;
				public static SA_EAST_1: com.amazonaws.regions.Regions;
				public static CA_CENTRAL_1: com.amazonaws.regions.Regions;
				public static CN_NORTH_1: com.amazonaws.regions.Regions;
				public static CN_NORTHWEST_1: com.amazonaws.regions.Regions;
				public static ME_SOUTH_1: com.amazonaws.regions.Regions;
				public static DEFAULT_REGION: com.amazonaws.regions.Regions;
				public static values(): native.Array<com.amazonaws.regions.Regions>;
				public static fromName(param0: string): com.amazonaws.regions.Regions;
				public static valueOf(param0: string): com.amazonaws.regions.Regions;
				public getName(): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module regions {
			export class ServiceAbbreviations {
				public static class: java.lang.Class<com.amazonaws.regions.ServiceAbbreviations>;
				public static CloudFormation: string;
				public static CloudFront: string;
				public static CloudSearch: string;
				public static CloudWatch: string;
				public static Dynamodb: string;
				public static EC2: string;
				public static ElasticMapReduce: string;
				public static Elasticache: string;
				public static RDS: string;
				public static Route53: string;
				public static Email: string;
				public static SimpleDB: string;
				public static SNS: string;
				public static SQS: string;
				public static S3: string;
				public static Autoscaling: string;
				public static ElasticBeanstalk: string;
				public static IAM: string;
				public static ImportExport: string;
				public static STS: string;
				public static StorageGateway: string;
				public static ElasticLoadbalancing: string;
				public static SimpleWorkflow: string;
				public static Glacier: string;
				public static DirectConnect: string;
				public static DataPipeline: string;
				public static RedShift: string;
				public static Opsworks: string;
				public static ElasticTranscoder: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module retry {
			export class PredefinedRetryPolicies {
				public static class: java.lang.Class<com.amazonaws.retry.PredefinedRetryPolicies>;
				public static NO_RETRY_POLICY: com.amazonaws.retry.RetryPolicy;
				public static DEFAULT_MAX_ERROR_RETRY: number;
				public static DEFAULT: com.amazonaws.retry.RetryPolicy;
				public static DYNAMODB_DEFAULT_MAX_ERROR_RETRY: number;
				public static DYNAMODB_DEFAULT: com.amazonaws.retry.RetryPolicy;
				public static DEFAULT_RETRY_CONDITION: com.amazonaws.retry.RetryPolicy.RetryCondition;
				public static DEFAULT_BACKOFF_STRATEGY: com.amazonaws.retry.RetryPolicy.BackoffStrategy;
				public static getDynamoDBDefaultRetryPolicy(): com.amazonaws.retry.RetryPolicy;
				public static getDefaultRetryPolicy(): com.amazonaws.retry.RetryPolicy;
				public static getDynamoDBDefaultRetryPolicyWithCustomMaxRetries(param0: number): com.amazonaws.retry.RetryPolicy;
				public static getDefaultRetryPolicyWithCustomMaxRetries(param0: number): com.amazonaws.retry.RetryPolicy;
				public constructor();
			}
			export module PredefinedRetryPolicies {
				export class SDKDefaultBackoffStrategy extends com.amazonaws.retry.RetryPolicy.BackoffStrategy {
					public static class: java.lang.Class<com.amazonaws.retry.PredefinedRetryPolicies.SDKDefaultBackoffStrategy>;
					public delayBeforeNextRetry(param0: com.amazonaws.AmazonWebServiceRequest, param1: com.amazonaws.AmazonClientException, param2: number): number;
				}
				export class SDKDefaultRetryCondition extends com.amazonaws.retry.RetryPolicy.RetryCondition {
					public static class: java.lang.Class<com.amazonaws.retry.PredefinedRetryPolicies.SDKDefaultRetryCondition>;
					public constructor();
					public shouldRetry(param0: com.amazonaws.AmazonWebServiceRequest, param1: com.amazonaws.AmazonClientException, param2: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module retry {
			export class RetryPolicy {
				public static class: java.lang.Class<com.amazonaws.retry.RetryPolicy>;
				public getRetryCondition(): com.amazonaws.retry.RetryPolicy.RetryCondition;
				public constructor(param0: com.amazonaws.retry.RetryPolicy.RetryCondition, param1: com.amazonaws.retry.RetryPolicy.BackoffStrategy, param2: number, param3: boolean);
				public getBackoffStrategy(): com.amazonaws.retry.RetryPolicy.BackoffStrategy;
				public isMaxErrorRetryInClientConfigHonored(): boolean;
				public getMaxErrorRetry(): number;
			}
			export module RetryPolicy {
				export class BackoffStrategy {
					public static class: java.lang.Class<com.amazonaws.retry.RetryPolicy.BackoffStrategy>;
					/**
					 * Constructs a new instance of the com.amazonaws.retry.RetryPolicy$BackoffStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						delayBeforeNextRetry(param0: com.amazonaws.AmazonWebServiceRequest, param1: com.amazonaws.AmazonClientException, param2: number): number;
						<clinit>(): void;
					});
					public constructor();
					public static NO_DELAY: com.amazonaws.retry.RetryPolicy.BackoffStrategy;
					public delayBeforeNextRetry(param0: com.amazonaws.AmazonWebServiceRequest, param1: com.amazonaws.AmazonClientException, param2: number): number;
				}
				export class RetryCondition {
					public static class: java.lang.Class<com.amazonaws.retry.RetryPolicy.RetryCondition>;
					/**
					 * Constructs a new instance of the com.amazonaws.retry.RetryPolicy$RetryCondition interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						shouldRetry(param0: com.amazonaws.AmazonWebServiceRequest, param1: com.amazonaws.AmazonClientException, param2: number): boolean;
						<clinit>(): void;
					});
					public constructor();
					public static NO_RETRY_CONDITION: com.amazonaws.retry.RetryPolicy.RetryCondition;
					public shouldRetry(param0: com.amazonaws.AmazonWebServiceRequest, param1: com.amazonaws.AmazonClientException, param2: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module retry {
			export class RetryUtils {
				public static class: java.lang.Class<com.amazonaws.retry.RetryUtils>;
				public static isInterrupted(param0: java.lang.Throwable): boolean;
				public static isClockSkewError(param0: com.amazonaws.AmazonServiceException): boolean;
				public static isRequestEntityTooLargeException(param0: com.amazonaws.AmazonServiceException): boolean;
				public static isThrottlingException(param0: com.amazonaws.AmazonServiceException): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export class AmazonCognitoIdentity {
					public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity>;
					/**
					 * Constructs a new instance of the com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setEndpoint(param0: string): void;
						setRegion(param0: com.amazonaws.regions.Region): void;
						createIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						deleteIdentities(param0: com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesResult;
						deleteIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest): void;
						describeIdentity(param0: com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
						describeIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						getCredentialsForIdentity(param0: com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityResult;
						getId(param0: com.amazonaws.services.cognitoidentity.model.GetIdRequest): com.amazonaws.services.cognitoidentity.model.GetIdResult;
						getIdentityPoolRoles(param0: com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
						getOpenIdToken(param0: com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenResult;
						getOpenIdTokenForDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityResult;
						listIdentities(param0: com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult;
						listIdentityPools(param0: com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult;
						listTagsForResource(param0: com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest): com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult;
						lookupDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult;
						mergeDeveloperIdentities(param0: com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesResult;
						setIdentityPoolRoles(param0: com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest): void;
						tagResource(param0: com.amazonaws.services.cognitoidentity.model.TagResourceRequest): com.amazonaws.services.cognitoidentity.model.TagResourceResult;
						unlinkDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest): void;
						unlinkIdentity(param0: com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest): void;
						untagResource(param0: com.amazonaws.services.cognitoidentity.model.UntagResourceRequest): com.amazonaws.services.cognitoidentity.model.UntagResourceResult;
						updateIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						shutdown(): void;
						getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					});
					public constructor();
					public getCredentialsForIdentity(param0: com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityResult;
					public setIdentityPoolRoles(param0: com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest): void;
					public unlinkIdentity(param0: com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest): void;
					public listTagsForResource(param0: com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest): com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult;
					public unlinkDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest): void;
					public getIdentityPoolRoles(param0: com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
					public describeIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
					public shutdown(): void;
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					public untagResource(param0: com.amazonaws.services.cognitoidentity.model.UntagResourceRequest): com.amazonaws.services.cognitoidentity.model.UntagResourceResult;
					public setEndpoint(param0: string): void;
					public deleteIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest): void;
					public listIdentities(param0: com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult;
					public describeIdentity(param0: com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
					public getOpenIdTokenForDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityResult;
					public listIdentityPools(param0: com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult;
					public deleteIdentities(param0: com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesResult;
					public getOpenIdToken(param0: com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenResult;
					public tagResource(param0: com.amazonaws.services.cognitoidentity.model.TagResourceRequest): com.amazonaws.services.cognitoidentity.model.TagResourceResult;
					public updateIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
					public getId(param0: com.amazonaws.services.cognitoidentity.model.GetIdRequest): com.amazonaws.services.cognitoidentity.model.GetIdResult;
					public setRegion(param0: com.amazonaws.regions.Region): void;
					public createIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
					public mergeDeveloperIdentities(param0: com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesResult;
					public lookupDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export class AmazonCognitoIdentityClient extends com.amazonaws.AmazonWebServiceClient implements com.amazonaws.services.cognitoidentity.AmazonCognitoIdentity {
					public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.AmazonCognitoIdentityClient>;
					public jsonErrorUnmarshallers: java.util.List<com.amazonaws.transform.JsonErrorUnmarshaller>;
					/** @deprecated */
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration);
					public getCredentialsForIdentity(param0: com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityResult;
					public setIdentityPoolRoles(param0: com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest): void;
					public unlinkIdentity(param0: com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest): void;
					public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.http.HttpClient);
					/** @deprecated */
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.metrics.RequestMetricCollector);
					public listTagsForResource(param0: com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest): com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentials);
					public unlinkDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest): void;
					public getIdentityPoolRoles(param0: com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
					public describeIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
					public shutdown(): void;
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					/** @deprecated */
					public constructor();
					public untagResource(param0: com.amazonaws.services.cognitoidentity.model.UntagResourceRequest): com.amazonaws.services.cognitoidentity.model.UntagResourceResult;
					public deleteIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest): void;
					public setEndpoint(param0: string): void;
					public listIdentities(param0: com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: com.amazonaws.ClientConfiguration);
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider);
					/** @deprecated */
					public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.metrics.RequestMetricCollector);
					public constructor(param0: com.amazonaws.ClientConfiguration);
					public describeIdentity(param0: com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
					public getOpenIdTokenForDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityResult;
					public listIdentityPools(param0: com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult;
					public deleteIdentities(param0: com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesResult;
					public getOpenIdToken(param0: com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenResult;
					public tagResource(param0: com.amazonaws.services.cognitoidentity.model.TagResourceRequest): com.amazonaws.services.cognitoidentity.model.TagResourceResult;
					public updateIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.http.HttpClient);
					/** @deprecated */
					public constructor(param0: com.amazonaws.ClientConfiguration);
					public getId(param0: com.amazonaws.services.cognitoidentity.model.GetIdRequest): com.amazonaws.services.cognitoidentity.model.GetIdResult;
					public setRegion(param0: com.amazonaws.regions.Region): void;
					public createIdentityPool(param0: com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
					public mergeDeveloperIdentities(param0: com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesResult;
					/** @deprecated */
					public setEndpoint(param0: string, param1: string, param2: string): void;
					/** @deprecated */
					public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.http.HttpClient, param2: com.amazonaws.metrics.RequestMetricCollector);
					public lookupDeveloperIdentity(param0: com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class AmbiguousRoleResolutionType {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.AmbiguousRoleResolutionType>;
						public static AuthenticatedRole: com.amazonaws.services.cognitoidentity.model.AmbiguousRoleResolutionType;
						public static Deny: com.amazonaws.services.cognitoidentity.model.AmbiguousRoleResolutionType;
						public static values(): native.Array<com.amazonaws.services.cognitoidentity.model.AmbiguousRoleResolutionType>;
						public static fromValue(param0: string): com.amazonaws.services.cognitoidentity.model.AmbiguousRoleResolutionType;
						public static valueOf(param0: string): com.amazonaws.services.cognitoidentity.model.AmbiguousRoleResolutionType;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class CognitoIdentityProvider {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>;
						public constructor();
						public setServerSideTokenCheck(param0: java.lang.Boolean): void;
						public withProviderName(param0: string): com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider;
						public setClientId(param0: string): void;
						public isServerSideTokenCheck(): java.lang.Boolean;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getClientId(): string;
						public withClientId(param0: string): com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider;
						public getServerSideTokenCheck(): java.lang.Boolean;
						public toString(): string;
						public setProviderName(param0: string): void;
						public withServerSideTokenCheck(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider;
						public getProviderName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ConcurrentModificationException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ConcurrentModificationException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class CreateIdentityPoolRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest>;
						public getAllowClassicFlow(): java.lang.Boolean;
						public withDeveloperProviderName(param0: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public withOpenIdConnectProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public getSupportedLoginProviders(): java.util.Map<string,string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public clearSupportedLoginProvidersEntries(): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public withSamlProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public getIdentityPoolTags(): java.util.Map<string,string>;
						public setAllowClassicFlow(param0: java.lang.Boolean): void;
						public withCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public setAllowUnauthenticatedIdentities(param0: java.lang.Boolean): void;
						public addSupportedLoginProvidersEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public getIdentityPoolName(): string;
						public withOpenIdConnectProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public addIdentityPoolTagsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public clearIdentityPoolTagsEntries(): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public setDeveloperProviderName(param0: string): void;
						public setIdentityPoolTags(param0: java.util.Map<string,string>): void;
						public withAllowUnauthenticatedIdentities(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public constructor();
						public isAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public setIdentityPoolName(param0: string): void;
						public setOpenIdConnectProviderARNs(param0: java.util.Collection<string>): void;
						public getAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public getOpenIdConnectProviderARNs(): java.util.List<string>;
						public withSupportedLoginProviders(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public withIdentityPoolName(param0: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public toString(): string;
						public getCognitoIdentityProviders(): java.util.List<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>;
						public getDeveloperProviderName(): string;
						public getSamlProviderARNs(): java.util.List<string>;
						public isAllowClassicFlow(): java.lang.Boolean;
						public setSupportedLoginProviders(param0: java.util.Map<string,string>): void;
						public setCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): void;
						public setSamlProviderARNs(param0: java.util.Collection<string>): void;
						public withIdentityPoolTags(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public withAllowClassicFlow(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public withSamlProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
						public withCognitoIdentityProviders(param0: native.Array<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class CreateIdentityPoolResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult>;
						public clearIdentityPoolTagsEntries(): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public getAllowClassicFlow(): java.lang.Boolean;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public getSupportedLoginProviders(): java.util.Map<string,string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityPoolTags(): java.util.Map<string,string>;
						public setAllowClassicFlow(param0: java.lang.Boolean): void;
						public withOpenIdConnectProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public setAllowUnauthenticatedIdentities(param0: java.lang.Boolean): void;
						public getIdentityPoolName(): string;
						public withCognitoIdentityProviders(param0: native.Array<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public withCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public withSamlProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public withDeveloperProviderName(param0: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public setDeveloperProviderName(param0: string): void;
						public addSupportedLoginProvidersEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public setIdentityPoolTags(param0: java.util.Map<string,string>): void;
						public withIdentityPoolName(param0: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public isAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public setIdentityPoolName(param0: string): void;
						public withSupportedLoginProviders(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public setOpenIdConnectProviderARNs(param0: java.util.Collection<string>): void;
						public getAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public getOpenIdConnectProviderARNs(): java.util.List<string>;
						public withSamlProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public toString(): string;
						public withIdentityPoolTags(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public getIdentityPoolId(): string;
						public getCognitoIdentityProviders(): java.util.List<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>;
						public getDeveloperProviderName(): string;
						public getSamlProviderARNs(): java.util.List<string>;
						public isAllowClassicFlow(): java.lang.Boolean;
						public withOpenIdConnectProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public setSupportedLoginProviders(param0: java.util.Map<string,string>): void;
						public setCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): void;
						public withAllowUnauthenticatedIdentities(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public setSamlProviderARNs(param0: java.util.Collection<string>): void;
						public withAllowClassicFlow(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public addIdentityPoolTagsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						public clearSupportedLoginProvidersEntries(): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class Credentials {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.Credentials>;
						public getAccessKeyId(): string;
						public setExpiration(param0: java.util.Date): void;
						public constructor();
						public getSecretKey(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withExpiration(param0: java.util.Date): com.amazonaws.services.cognitoidentity.model.Credentials;
						public withSecretKey(param0: string): com.amazonaws.services.cognitoidentity.model.Credentials;
						public toString(): string;
						public setSecretKey(param0: string): void;
						public setSessionToken(param0: string): void;
						public setAccessKeyId(param0: string): void;
						public getSessionToken(): string;
						public withAccessKeyId(param0: string): com.amazonaws.services.cognitoidentity.model.Credentials;
						public getExpiration(): java.util.Date;
						public withSessionToken(param0: string): com.amazonaws.services.cognitoidentity.model.Credentials;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class DeleteIdentitiesRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest>;
						public constructor();
						public withIdentityIdsToDelete(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest;
						public getIdentityIdsToDelete(): java.util.List<string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withIdentityIdsToDelete(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest;
						public setIdentityIdsToDelete(param0: java.util.Collection<string>): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class DeleteIdentitiesResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesResult>;
						public constructor();
						public withUnprocessedIdentityIds(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId>): com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesResult;
						public setUnprocessedIdentityIds(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getUnprocessedIdentityIds(): java.util.List<com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId>;
						public withUnprocessedIdentityIds(param0: native.Array<com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId>): com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class DeleteIdentityPoolRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest>;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public getIdentityPoolId(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class DescribeIdentityPoolRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest>;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public getIdentityPoolId(): string;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class DescribeIdentityPoolResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult>;
						public withCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public getAllowClassicFlow(): java.lang.Boolean;
						public clearIdentityPoolTagsEntries(): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public clearSupportedLoginProvidersEntries(): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public getSupportedLoginProviders(): java.util.Map<string,string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityPoolTags(): java.util.Map<string,string>;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public withIdentityPoolName(param0: string): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public setAllowClassicFlow(param0: java.lang.Boolean): void;
						public addSupportedLoginProvidersEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public setAllowUnauthenticatedIdentities(param0: java.lang.Boolean): void;
						public getIdentityPoolName(): string;
						public withCognitoIdentityProviders(param0: native.Array<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public withAllowUnauthenticatedIdentities(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public withDeveloperProviderName(param0: string): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public setDeveloperProviderName(param0: string): void;
						public setIdentityPoolTags(param0: java.util.Map<string,string>): void;
						public withSupportedLoginProviders(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public isAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public setIdentityPoolName(param0: string): void;
						public withAllowClassicFlow(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public setOpenIdConnectProviderARNs(param0: java.util.Collection<string>): void;
						public getAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public getOpenIdConnectProviderARNs(): java.util.List<string>;
						public withSamlProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public withOpenIdConnectProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public toString(): string;
						public withSamlProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public addIdentityPoolTagsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public withIdentityPoolTags(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public getIdentityPoolId(): string;
						public getCognitoIdentityProviders(): java.util.List<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>;
						public getDeveloperProviderName(): string;
						public getSamlProviderARNs(): java.util.List<string>;
						public isAllowClassicFlow(): java.lang.Boolean;
						public setSupportedLoginProviders(param0: java.util.Map<string,string>): void;
						public withOpenIdConnectProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
						public setCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): void;
						public setSamlProviderARNs(param0: java.util.Collection<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class DescribeIdentityRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest>;
						public constructor();
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityId(): string;
						public setIdentityId(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class DescribeIdentityResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult>;
						public withCreationDate(param0: java.util.Date): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
						public constructor();
						public setLogins(param0: java.util.Collection<string>): void;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIdentityId(param0: string): void;
						public withLogins(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
						public setLastModifiedDate(param0: java.util.Date): void;
						public getCreationDate(): java.util.Date;
						public toString(): string;
						public setCreationDate(param0: java.util.Date): void;
						public getLogins(): java.util.List<string>;
						public withLogins(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
						public withLastModifiedDate(param0: java.util.Date): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
						public getIdentityId(): string;
						public getLastModifiedDate(): java.util.Date;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class DeveloperUserAlreadyRegisteredException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.DeveloperUserAlreadyRegisteredException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ErrorCode {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ErrorCode>;
						public static AccessDenied: com.amazonaws.services.cognitoidentity.model.ErrorCode;
						public static InternalServerError: com.amazonaws.services.cognitoidentity.model.ErrorCode;
						public static fromValue(param0: string): com.amazonaws.services.cognitoidentity.model.ErrorCode;
						public static values(): native.Array<com.amazonaws.services.cognitoidentity.model.ErrorCode>;
						public static valueOf(param0: string): com.amazonaws.services.cognitoidentity.model.ErrorCode;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ExternalServiceException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ExternalServiceException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetCredentialsForIdentityRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest>;
						public constructor();
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIdentityId(param0: string): void;
						public clearLoginsEntries(): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest;
						public getCustomRoleArn(): string;
						public toString(): string;
						public withLogins(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest;
						public withCustomRoleArn(param0: string): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest;
						public setLogins(param0: java.util.Map<string,string>): void;
						public getIdentityId(): string;
						public addLoginsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest;
						public setCustomRoleArn(param0: string): void;
						public getLogins(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetCredentialsForIdentityResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityResult>;
						public constructor();
						public getCredentials(): com.amazonaws.services.cognitoidentity.model.Credentials;
						public setCredentials(param0: com.amazonaws.services.cognitoidentity.model.Credentials): void;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityId(): string;
						public setIdentityId(param0: string): void;
						public withCredentials(param0: com.amazonaws.services.cognitoidentity.model.Credentials): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetIdRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetIdRequest>;
						public constructor();
						public getAccountId(): string;
						public setIdentityPoolId(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withAccountId(param0: string): com.amazonaws.services.cognitoidentity.model.GetIdRequest;
						public toString(): string;
						public setAccountId(param0: string): void;
						public getIdentityPoolId(): string;
						public clearLoginsEntries(): com.amazonaws.services.cognitoidentity.model.GetIdRequest;
						public setLogins(param0: java.util.Map<string,string>): void;
						public addLoginsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.GetIdRequest;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.GetIdRequest;
						public withLogins(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.GetIdRequest;
						public getLogins(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetIdResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetIdResult>;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.GetIdResult;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityId(): string;
						public setIdentityId(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetIdentityPoolRolesRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest>;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public getIdentityPoolId(): string;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetIdentityPoolRolesResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult>;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public getRoles(): java.util.Map<string,string>;
						public addRoleMappingsEntry(param0: string, param1: com.amazonaws.services.cognitoidentity.model.RoleMapping): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
						public withRoleMappings(param0: java.util.Map<string,com.amazonaws.services.cognitoidentity.model.RoleMapping>): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
						public clearRolesEntries(): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
						public getIdentityPoolId(): string;
						public addRolesEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
						public setRoleMappings(param0: java.util.Map<string,com.amazonaws.services.cognitoidentity.model.RoleMapping>): void;
						public getRoleMappings(): java.util.Map<string,com.amazonaws.services.cognitoidentity.model.RoleMapping>;
						public clearRoleMappingsEntries(): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
						public setRoles(param0: java.util.Map<string,string>): void;
						public withRoles(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetOpenIdTokenForDeveloperIdentityRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest>;
						public clearLoginsEntries(): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public addLoginsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest;
						public setIdentityId(param0: string): void;
						public toString(): string;
						public getIdentityPoolId(): string;
						public setTokenDuration(param0: java.lang.Long): void;
						public setLogins(param0: java.util.Map<string,string>): void;
						public withLogins(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest;
						public getIdentityId(): string;
						public withTokenDuration(param0: java.lang.Long): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest;
						public getLogins(): java.util.Map<string,string>;
						public getTokenDuration(): java.lang.Long;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetOpenIdTokenForDeveloperIdentityResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityResult>;
						public constructor();
						public setToken(param0: string): void;
						public withToken(param0: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityId(): string;
						public setIdentityId(param0: string): void;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityResult;
						public getToken(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetOpenIdTokenRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest>;
						public withLogins(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest;
						public constructor();
						public setLogins(param0: java.util.Map<string,string>): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityId(): string;
						public clearLoginsEntries(): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest;
						public setIdentityId(param0: string): void;
						public addLoginsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest;
						public getLogins(): java.util.Map<string,string>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class GetOpenIdTokenResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenResult>;
						public constructor();
						public setToken(param0: string): void;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityId(): string;
						public setIdentityId(param0: string): void;
						public withToken(param0: string): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenResult;
						public getToken(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class IdentityDescription {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.IdentityDescription>;
						public constructor();
						public setLogins(param0: java.util.Collection<string>): void;
						public withCreationDate(param0: java.util.Date): com.amazonaws.services.cognitoidentity.model.IdentityDescription;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIdentityId(param0: string): void;
						public setLastModifiedDate(param0: java.util.Date): void;
						public getCreationDate(): java.util.Date;
						public toString(): string;
						public withLastModifiedDate(param0: java.util.Date): com.amazonaws.services.cognitoidentity.model.IdentityDescription;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.IdentityDescription;
						public withLogins(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.IdentityDescription;
						public setCreationDate(param0: java.util.Date): void;
						public getLogins(): java.util.List<string>;
						public getIdentityId(): string;
						public withLogins(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.IdentityDescription;
						public getLastModifiedDate(): java.util.Date;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class IdentityPoolShortDescription {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription>;
						public withIdentityPoolName(param0: string): com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public getIdentityPoolName(): string;
						public getIdentityPoolId(): string;
						public setIdentityPoolName(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class InternalErrorException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.InternalErrorException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class InvalidIdentityPoolConfigurationException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.InvalidIdentityPoolConfigurationException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class InvalidParameterException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.InvalidParameterException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class LimitExceededException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.LimitExceededException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ListIdentitiesRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest>;
						public setNextToken(param0: string): void;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public withHideDisabled(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest;
						public getNextToken(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withMaxResults(param0: java.lang.Integer): com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest;
						public getHideDisabled(): java.lang.Boolean;
						public isHideDisabled(): java.lang.Boolean;
						public toString(): string;
						public getIdentityPoolId(): string;
						public setHideDisabled(param0: java.lang.Boolean): void;
						public getMaxResults(): java.lang.Integer;
						public withNextToken(param0: string): com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest;
						public setMaxResults(param0: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ListIdentitiesResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult>;
						public setNextToken(param0: string): void;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public withIdentities(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.IdentityDescription>): com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult;
						public getNextToken(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult;
						public withIdentities(param0: native.Array<com.amazonaws.services.cognitoidentity.model.IdentityDescription>): com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult;
						public getIdentities(): java.util.List<com.amazonaws.services.cognitoidentity.model.IdentityDescription>;
						public toString(): string;
						public getIdentityPoolId(): string;
						public withNextToken(param0: string): com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult;
						public setIdentities(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.IdentityDescription>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ListIdentityPoolsRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest>;
						public setNextToken(param0: string): void;
						public constructor();
						public withMaxResults(param0: java.lang.Integer): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest;
						public withNextToken(param0: string): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest;
						public getMaxResults(): java.lang.Integer;
						public getNextToken(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setMaxResults(param0: java.lang.Integer): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ListIdentityPoolsResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult>;
						public setNextToken(param0: string): void;
						public constructor();
						public withNextToken(param0: string): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult;
						public getIdentityPools(): java.util.List<com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription>;
						public getNextToken(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIdentityPools(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription>): void;
						public withIdentityPools(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription>): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult;
						public toString(): string;
						public withIdentityPools(param0: native.Array<com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription>): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ListTagsForResourceRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest>;
						public constructor();
						public getResourceArn(): string;
						public setResourceArn(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public withResourceArn(param0: string): com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ListTagsForResourceResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult>;
						public constructor();
						public getTags(): java.util.Map<string,string>;
						public clearTagsEntries(): com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult;
						public withTags(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setTags(param0: java.util.Map<string,string>): void;
						public addTagsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class LookupDeveloperIdentityRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest>;
						public setNextToken(param0: string): void;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public withDeveloperUserIdentifier(param0: string): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest;
						public getNextToken(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIdentityId(param0: string): void;
						public getDeveloperUserIdentifier(): string;
						public withNextToken(param0: string): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest;
						public toString(): string;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest;
						public withMaxResults(param0: java.lang.Integer): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest;
						public getIdentityPoolId(): string;
						public setDeveloperUserIdentifier(param0: string): void;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest;
						public getMaxResults(): java.lang.Integer;
						public getIdentityId(): string;
						public setMaxResults(param0: java.lang.Integer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class LookupDeveloperIdentityResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult>;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult;
						public setNextToken(param0: string): void;
						public constructor();
						public getNextToken(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIdentityId(param0: string): void;
						public getDeveloperUserIdentifierList(): java.util.List<string>;
						public toString(): string;
						public withNextToken(param0: string): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult;
						public setDeveloperUserIdentifierList(param0: java.util.Collection<string>): void;
						public getIdentityId(): string;
						public withDeveloperUserIdentifierList(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult;
						public withDeveloperUserIdentifierList(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class MappingRule {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.MappingRule>;
						public withClaim(param0: string): com.amazonaws.services.cognitoidentity.model.MappingRule;
						public constructor();
						public setClaim(param0: string): void;
						public withMatchType(param0: com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType): com.amazonaws.services.cognitoidentity.model.MappingRule;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getValue(): string;
						public withValue(param0: string): com.amazonaws.services.cognitoidentity.model.MappingRule;
						public withMatchType(param0: string): com.amazonaws.services.cognitoidentity.model.MappingRule;
						public setRoleARN(param0: string): void;
						public toString(): string;
						public getClaim(): string;
						public getRoleARN(): string;
						public setMatchType(param0: com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType): void;
						public withRoleARN(param0: string): com.amazonaws.services.cognitoidentity.model.MappingRule;
						public setValue(param0: string): void;
						public getMatchType(): string;
						public setMatchType(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class MappingRuleMatchType {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType>;
						public static Equals: com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType;
						public static Contains: com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType;
						public static StartsWith: com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType;
						public static NotEqual: com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType;
						public static valueOf(param0: string): com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType;
						public static values(): native.Array<com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType>;
						public static fromValue(param0: string): com.amazonaws.services.cognitoidentity.model.MappingRuleMatchType;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class MergeDeveloperIdentitiesRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest>;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public setDestinationUserIdentifier(param0: string): void;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest;
						public withDestinationUserIdentifier(param0: string): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public setSourceUserIdentifier(param0: string): void;
						public getDestinationUserIdentifier(): string;
						public getIdentityPoolId(): string;
						public getDeveloperProviderName(): string;
						public setDeveloperProviderName(param0: string): void;
						public getSourceUserIdentifier(): string;
						public withSourceUserIdentifier(param0: string): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest;
						public withDeveloperProviderName(param0: string): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class MergeDeveloperIdentitiesResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesResult>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityId(): string;
						public setIdentityId(param0: string): void;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesResult;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class NotAuthorizedException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.NotAuthorizedException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ResourceConflictException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ResourceConflictException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class ResourceNotFoundException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.ResourceNotFoundException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class RoleMapping {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.RoleMapping>;
						public constructor();
						public getType(): string;
						public withRulesConfiguration(param0: com.amazonaws.services.cognitoidentity.model.RulesConfigurationType): com.amazonaws.services.cognitoidentity.model.RoleMapping;
						public withType(param0: string): com.amazonaws.services.cognitoidentity.model.RoleMapping;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAmbiguousRoleResolution(): string;
						public setAmbiguousRoleResolution(param0: com.amazonaws.services.cognitoidentity.model.AmbiguousRoleResolutionType): void;
						public setType(param0: string): void;
						public toString(): string;
						public setType(param0: com.amazonaws.services.cognitoidentity.model.RoleMappingType): void;
						public withType(param0: com.amazonaws.services.cognitoidentity.model.RoleMappingType): com.amazonaws.services.cognitoidentity.model.RoleMapping;
						public getRulesConfiguration(): com.amazonaws.services.cognitoidentity.model.RulesConfigurationType;
						public setAmbiguousRoleResolution(param0: string): void;
						public withAmbiguousRoleResolution(param0: com.amazonaws.services.cognitoidentity.model.AmbiguousRoleResolutionType): com.amazonaws.services.cognitoidentity.model.RoleMapping;
						public withAmbiguousRoleResolution(param0: string): com.amazonaws.services.cognitoidentity.model.RoleMapping;
						public setRulesConfiguration(param0: com.amazonaws.services.cognitoidentity.model.RulesConfigurationType): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class RoleMappingType {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.RoleMappingType>;
						public static Token: com.amazonaws.services.cognitoidentity.model.RoleMappingType;
						public static Rules: com.amazonaws.services.cognitoidentity.model.RoleMappingType;
						public static valueOf(param0: string): com.amazonaws.services.cognitoidentity.model.RoleMappingType;
						public static fromValue(param0: string): com.amazonaws.services.cognitoidentity.model.RoleMappingType;
						public static values(): native.Array<com.amazonaws.services.cognitoidentity.model.RoleMappingType>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class RulesConfigurationType {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.RulesConfigurationType>;
						public constructor();
						public withRules(param0: native.Array<com.amazonaws.services.cognitoidentity.model.MappingRule>): com.amazonaws.services.cognitoidentity.model.RulesConfigurationType;
						public withRules(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.MappingRule>): com.amazonaws.services.cognitoidentity.model.RulesConfigurationType;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setRules(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.MappingRule>): void;
						public getRules(): java.util.List<com.amazonaws.services.cognitoidentity.model.MappingRule>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class SetIdentityPoolRolesRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest>;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public getRoles(): java.util.Map<string,string>;
						public withRoles(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest;
						public toString(): string;
						public getIdentityPoolId(): string;
						public withRoleMappings(param0: java.util.Map<string,com.amazonaws.services.cognitoidentity.model.RoleMapping>): com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest;
						public setRoleMappings(param0: java.util.Map<string,com.amazonaws.services.cognitoidentity.model.RoleMapping>): void;
						public getRoleMappings(): java.util.Map<string,com.amazonaws.services.cognitoidentity.model.RoleMapping>;
						public clearRoleMappingsEntries(): com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest;
						public setRoles(param0: java.util.Map<string,string>): void;
						public addRolesEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest;
						public clearRolesEntries(): com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest;
						public addRoleMappingsEntry(param0: string, param1: com.amazonaws.services.cognitoidentity.model.RoleMapping): com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class TagResourceRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.TagResourceRequest>;
						public withResourceArn(param0: string): com.amazonaws.services.cognitoidentity.model.TagResourceRequest;
						public constructor();
						public withTags(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.TagResourceRequest;
						public getTags(): java.util.Map<string,string>;
						public clearTagsEntries(): com.amazonaws.services.cognitoidentity.model.TagResourceRequest;
						public getResourceArn(): string;
						public setResourceArn(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setTags(param0: java.util.Map<string,string>): void;
						public addTagsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.TagResourceRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class TagResourceResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.TagResourceResult>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class TooManyRequestsException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.TooManyRequestsException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class UnlinkDeveloperIdentityRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest>;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest;
						public withDeveloperProviderName(param0: string): com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIdentityId(param0: string): void;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest;
						public getDeveloperUserIdentifier(): string;
						public toString(): string;
						public withDeveloperUserIdentifier(param0: string): com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest;
						public getIdentityPoolId(): string;
						public getDeveloperProviderName(): string;
						public setDeveloperUserIdentifier(param0: string): void;
						public getIdentityId(): string;
						public setDeveloperProviderName(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class UnlinkIdentityRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest>;
						public constructor();
						public withLogins(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest;
						public withLoginsToRemove(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest;
						public addLoginsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setIdentityId(param0: string): void;
						public getLoginsToRemove(): java.util.List<string>;
						public toString(): string;
						public setLogins(param0: java.util.Map<string,string>): void;
						public clearLoginsEntries(): com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest;
						public withLoginsToRemove(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest;
						public getIdentityId(): string;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest;
						public getLogins(): java.util.Map<string,string>;
						public setLoginsToRemove(param0: java.util.Collection<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class UnprocessedIdentityId {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId>;
						public constructor();
						public withErrorCode(param0: com.amazonaws.services.cognitoidentity.model.ErrorCode): com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId;
						public setErrorCode(param0: com.amazonaws.services.cognitoidentity.model.ErrorCode): void;
						public getErrorCode(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityId(): string;
						public setErrorCode(param0: string): void;
						public setIdentityId(param0: string): void;
						public withErrorCode(param0: string): com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId;
						public toString(): string;
						public withIdentityId(param0: string): com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class UntagResourceRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.UntagResourceRequest>;
						public getTagKeys(): java.util.List<string>;
						public constructor();
						public withTagKeys(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.UntagResourceRequest;
						public getResourceArn(): string;
						public setResourceArn(param0: string): void;
						public setTagKeys(param0: java.util.Collection<string>): void;
						public withTagKeys(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.UntagResourceRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withResourceArn(param0: string): com.amazonaws.services.cognitoidentity.model.UntagResourceRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class UntagResourceResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.UntagResourceResult>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class UpdateIdentityPoolRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest>;
						public getAllowClassicFlow(): java.lang.Boolean;
						public getSupportedLoginProviders(): java.util.Map<string,string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withOpenIdConnectProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public getIdentityPoolTags(): java.util.Map<string,string>;
						public setAllowClassicFlow(param0: java.lang.Boolean): void;
						public setAllowUnauthenticatedIdentities(param0: java.lang.Boolean): void;
						public getIdentityPoolName(): string;
						public withOpenIdConnectProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public setDeveloperProviderName(param0: string): void;
						public withCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public setIdentityPoolTags(param0: java.util.Map<string,string>): void;
						public withIdentityPoolName(param0: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public withCognitoIdentityProviders(param0: native.Array<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public isAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public setIdentityPoolName(param0: string): void;
						public setOpenIdConnectProviderARNs(param0: java.util.Collection<string>): void;
						public withSamlProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public getAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public getOpenIdConnectProviderARNs(): java.util.List<string>;
						public clearIdentityPoolTagsEntries(): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public withDeveloperProviderName(param0: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public withAllowUnauthenticatedIdentities(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public withIdentityPoolTags(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public toString(): string;
						public withAllowClassicFlow(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public withSamlProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public withSupportedLoginProviders(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public clearSupportedLoginProvidersEntries(): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public getIdentityPoolId(): string;
						public getCognitoIdentityProviders(): java.util.List<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>;
						public getDeveloperProviderName(): string;
						public getSamlProviderARNs(): java.util.List<string>;
						public isAllowClassicFlow(): java.lang.Boolean;
						public setSupportedLoginProviders(param0: java.util.Map<string,string>): void;
						public addIdentityPoolTagsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public addSupportedLoginProvidersEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest;
						public setCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): void;
						public setSamlProviderARNs(param0: java.util.Collection<string>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export class UpdateIdentityPoolResult {
						public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult>;
						public withAllowClassicFlow(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public getAllowClassicFlow(): java.lang.Boolean;
						public withSamlProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public withSupportedLoginProviders(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public getSupportedLoginProviders(): java.util.Map<string,string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getIdentityPoolTags(): java.util.Map<string,string>;
						public setAllowClassicFlow(param0: java.lang.Boolean): void;
						public withIdentityPoolTags(param0: java.util.Map<string,string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public withIdentityPoolName(param0: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public setAllowUnauthenticatedIdentities(param0: java.lang.Boolean): void;
						public getIdentityPoolName(): string;
						public withDeveloperProviderName(param0: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public addSupportedLoginProvidersEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public setDeveloperProviderName(param0: string): void;
						public setIdentityPoolTags(param0: java.util.Map<string,string>): void;
						public withCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public withSamlProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public clearIdentityPoolTagsEntries(): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public constructor();
						public setIdentityPoolId(param0: string): void;
						public isAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public setIdentityPoolName(param0: string): void;
						public setOpenIdConnectProviderARNs(param0: java.util.Collection<string>): void;
						public getAllowUnauthenticatedIdentities(): java.lang.Boolean;
						public getOpenIdConnectProviderARNs(): java.util.List<string>;
						public withIdentityPoolId(param0: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public withCognitoIdentityProviders(param0: native.Array<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public toString(): string;
						public withOpenIdConnectProviderARNs(param0: native.Array<string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public getIdentityPoolId(): string;
						public getCognitoIdentityProviders(): java.util.List<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>;
						public getDeveloperProviderName(): string;
						public getSamlProviderARNs(): java.util.List<string>;
						public isAllowClassicFlow(): java.lang.Boolean;
						public withOpenIdConnectProviderARNs(param0: java.util.Collection<string>): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public setSupportedLoginProviders(param0: java.util.Map<string,string>): void;
						public withAllowUnauthenticatedIdentities(param0: java.lang.Boolean): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public setCognitoIdentityProviders(param0: java.util.Collection<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider>): void;
						public addIdentityPoolTagsEntry(param0: string, param1: string): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
						public setSamlProviderARNs(param0: java.util.Collection<string>): void;
						public clearSupportedLoginProvidersEntries(): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class CognitoIdentityProviderJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.CognitoIdentityProviderJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.CognitoIdentityProviderJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class CognitoIdentityProviderJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.CognitoIdentityProviderJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.CognitoIdentityProvider;
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.CognitoIdentityProviderJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ConcurrentModificationExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ConcurrentModificationExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class CreateIdentityPoolRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest>,com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.CreateIdentityPoolRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class CreateIdentityPoolResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.CreateIdentityPoolResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.CreateIdentityPoolResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.CreateIdentityPoolResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class CredentialsJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.CredentialsJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.Credentials, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.CredentialsJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class CredentialsJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.Credentials,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.CredentialsJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.CredentialsJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.Credentials;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class DeleteIdentitiesRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest>,com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.DeleteIdentitiesRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class DeleteIdentitiesResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.DeleteIdentitiesResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.DeleteIdentitiesResult;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.DeleteIdentitiesResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class DeleteIdentityPoolRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest>,com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.DeleteIdentityPoolRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.DeleteIdentityPoolRequest>;
							public marshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class DescribeIdentityPoolRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest>,com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.DescribeIdentityPoolRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class DescribeIdentityPoolResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.DescribeIdentityPoolResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.DescribeIdentityPoolResult;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.DescribeIdentityPoolResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class DescribeIdentityRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest>,com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.DescribeIdentityRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.DescribeIdentityRequest>;
							public marshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class DescribeIdentityResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.DescribeIdentityResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.DescribeIdentityResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.DescribeIdentityResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class DeveloperUserAlreadyRegisteredExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.DeveloperUserAlreadyRegisteredExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ExternalServiceExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ExternalServiceExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetCredentialsForIdentityRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest>,com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetCredentialsForIdentityRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetCredentialsForIdentityResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetCredentialsForIdentityResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.GetCredentialsForIdentityResult;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.GetCredentialsForIdentityResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetIdRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetIdRequest>,com.amazonaws.services.cognitoidentity.model.GetIdRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetIdRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.GetIdRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetIdRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetIdResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.GetIdResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetIdResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.GetIdResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.GetIdResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetIdentityPoolRolesRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest>,com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetIdentityPoolRolesRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetIdentityPoolRolesResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetIdentityPoolRolesResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.GetIdentityPoolRolesResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.GetIdentityPoolRolesResult;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetOpenIdTokenForDeveloperIdentityRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest>,com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetOpenIdTokenForDeveloperIdentityRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetOpenIdTokenForDeveloperIdentityResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetOpenIdTokenForDeveloperIdentityResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenForDeveloperIdentityResult;
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.GetOpenIdTokenForDeveloperIdentityResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetOpenIdTokenRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest>,com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetOpenIdTokenRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class GetOpenIdTokenResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.GetOpenIdTokenResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.GetOpenIdTokenResult;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.GetOpenIdTokenResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class IdentityDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.IdentityDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.IdentityDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.IdentityDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class IdentityDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.IdentityDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.IdentityDescriptionJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.IdentityDescription;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.IdentityDescriptionJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class IdentityPoolShortDescriptionJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.IdentityPoolShortDescriptionJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.IdentityPoolShortDescriptionJsonMarshaller;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class IdentityPoolShortDescriptionJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.IdentityPoolShortDescriptionJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.IdentityPoolShortDescriptionJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.IdentityPoolShortDescription;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class InternalErrorExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.InternalErrorExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class InvalidIdentityPoolConfigurationExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.InvalidIdentityPoolConfigurationExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class InvalidParameterExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.InvalidParameterExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class LimitExceededExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.LimitExceededExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ListIdentitiesRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest>,com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ListIdentitiesRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.ListIdentitiesRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ListIdentitiesResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ListIdentitiesResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.ListIdentitiesResult;
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.ListIdentitiesResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ListIdentityPoolsRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest>,com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ListIdentityPoolsRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsRequest>;
							public marshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ListIdentityPoolsResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ListIdentityPoolsResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.ListIdentityPoolsResult;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.ListIdentityPoolsResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ListTagsForResourceRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest>,com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ListTagsForResourceRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.ListTagsForResourceRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ListTagsForResourceResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ListTagsForResourceResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.ListTagsForResourceResult;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.ListTagsForResourceResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class LookupDeveloperIdentityRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest>,com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.LookupDeveloperIdentityRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class LookupDeveloperIdentityResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.LookupDeveloperIdentityResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.LookupDeveloperIdentityResult;
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.LookupDeveloperIdentityResultJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class MappingRuleJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.MappingRuleJsonMarshaller>;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.MappingRule, param1: com.amazonaws.util.json.AwsJsonWriter): void;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.MappingRuleJsonMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class MappingRuleJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.MappingRule,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.MappingRuleJsonUnmarshaller>;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.MappingRuleJsonUnmarshaller;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.MappingRule;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class MergeDeveloperIdentitiesRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest>,com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.MergeDeveloperIdentitiesRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class MergeDeveloperIdentitiesResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.MergeDeveloperIdentitiesResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.MergeDeveloperIdentitiesResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.MergeDeveloperIdentitiesResult;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class NotAuthorizedExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.NotAuthorizedExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ResourceConflictExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ResourceConflictExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class ResourceNotFoundExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.ResourceNotFoundExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class RoleMappingJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.RoleMappingJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.RoleMappingJsonMarshaller;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.RoleMapping, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class RoleMappingJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.RoleMapping,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.RoleMappingJsonUnmarshaller>;
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.RoleMappingJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.RoleMapping;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class RulesConfigurationTypeJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.RulesConfigurationTypeJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.RulesConfigurationTypeJsonMarshaller;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.RulesConfigurationType, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class RulesConfigurationTypeJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.RulesConfigurationType,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.RulesConfigurationTypeJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.RulesConfigurationType;
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.RulesConfigurationTypeJsonUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class SetIdentityPoolRolesRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest>,com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.SetIdentityPoolRolesRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.SetIdentityPoolRolesRequest>;
							public marshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class TagResourceRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.TagResourceRequest>,com.amazonaws.services.cognitoidentity.model.TagResourceRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.TagResourceRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.TagResourceRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.TagResourceRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class TagResourceResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.TagResourceResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.TagResourceResultJsonUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.TagResourceResult;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.TagResourceResultJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class TooManyRequestsExceptionUnmarshaller extends com.amazonaws.transform.JsonErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.TooManyRequestsExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class UnlinkDeveloperIdentityRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest>,com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.UnlinkDeveloperIdentityRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.UnlinkDeveloperIdentityRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class UnlinkIdentityRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest>,com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.UnlinkIdentityRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.UnlinkIdentityRequest>;
							public marshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class UnprocessedIdentityIdJsonMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.UnprocessedIdentityIdJsonMarshaller>;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.UnprocessedIdentityIdJsonMarshaller;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId, param1: com.amazonaws.util.json.AwsJsonWriter): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class UnprocessedIdentityIdJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.UnprocessedIdentityIdJsonUnmarshaller>;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.UnprocessedIdentityId;
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.UnprocessedIdentityIdJsonUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class UntagResourceRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.UntagResourceRequest>,com.amazonaws.services.cognitoidentity.model.UntagResourceRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.UntagResourceRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.UntagResourceRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.UntagResourceRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class UntagResourceResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.UntagResourceResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.UntagResourceResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.UntagResourceResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.UntagResourceResult;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class UpdateIdentityPoolRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest>,com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.UpdateIdentityPoolRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest): com.amazonaws.Request<com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module cognitoidentity {
				export module model {
					export module transform {
						export class UpdateIdentityPoolResultJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult,com.amazonaws.transform.JsonUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.cognitoidentity.model.transform.UpdateIdentityPoolResultJsonUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.cognitoidentity.model.transform.UpdateIdentityPoolResultJsonUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): com.amazonaws.services.cognitoidentity.model.UpdateIdentityPoolResult;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export class AWSSecurityTokenService {
					public static class: java.lang.Class<com.amazonaws.services.securitytoken.AWSSecurityTokenService>;
					/**
					 * Constructs a new instance of the com.amazonaws.services.securitytoken.AWSSecurityTokenService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						setEndpoint(param0: string): void;
						setRegion(param0: com.amazonaws.regions.Region): void;
						assumeRole(param0: com.amazonaws.services.securitytoken.model.AssumeRoleRequest): com.amazonaws.services.securitytoken.model.AssumeRoleResult;
						assumeRoleWithSAML(param0: com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
						assumeRoleWithWebIdentity(param0: com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
						decodeAuthorizationMessage(param0: com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest): com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageResult;
						getAccessKeyInfo(param0: com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest): com.amazonaws.services.securitytoken.model.GetAccessKeyInfoResult;
						getCallerIdentity(param0: com.amazonaws.services.securitytoken.model.GetCallerIdentityRequest): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
						getFederationToken(param0: com.amazonaws.services.securitytoken.model.GetFederationTokenRequest): com.amazonaws.services.securitytoken.model.GetFederationTokenResult;
						getSessionToken(param0: com.amazonaws.services.securitytoken.model.GetSessionTokenRequest): com.amazonaws.services.securitytoken.model.GetSessionTokenResult;
						getSessionToken(): com.amazonaws.services.securitytoken.model.GetSessionTokenResult;
						getCallerIdentity(): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
						shutdown(): void;
						getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					});
					public constructor();
					public assumeRole(param0: com.amazonaws.services.securitytoken.model.AssumeRoleRequest): com.amazonaws.services.securitytoken.model.AssumeRoleResult;
					public getFederationToken(param0: com.amazonaws.services.securitytoken.model.GetFederationTokenRequest): com.amazonaws.services.securitytoken.model.GetFederationTokenResult;
					public assumeRoleWithSAML(param0: com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
					public getSessionToken(param0: com.amazonaws.services.securitytoken.model.GetSessionTokenRequest): com.amazonaws.services.securitytoken.model.GetSessionTokenResult;
					public getSessionToken(): com.amazonaws.services.securitytoken.model.GetSessionTokenResult;
					public getCallerIdentity(param0: com.amazonaws.services.securitytoken.model.GetCallerIdentityRequest): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
					public assumeRoleWithWebIdentity(param0: com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
					public getCallerIdentity(): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
					public shutdown(): void;
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					public getAccessKeyInfo(param0: com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest): com.amazonaws.services.securitytoken.model.GetAccessKeyInfoResult;
					public setEndpoint(param0: string): void;
					public setRegion(param0: com.amazonaws.regions.Region): void;
					public decodeAuthorizationMessage(param0: com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest): com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageResult;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export class AWSSecurityTokenServiceClient extends com.amazonaws.AmazonWebServiceClient implements com.amazonaws.services.securitytoken.AWSSecurityTokenService {
					public static class: java.lang.Class<com.amazonaws.services.securitytoken.AWSSecurityTokenServiceClient>;
					public exceptionUnmarshallers: java.util.List<com.amazonaws.transform.Unmarshaller<com.amazonaws.AmazonServiceException,org.w3c.dom.Node>>;
					/** @deprecated */
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration);
					public getFederationToken(param0: com.amazonaws.services.securitytoken.model.GetFederationTokenRequest): com.amazonaws.services.securitytoken.model.GetFederationTokenResult;
					public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.http.HttpClient);
					/** @deprecated */
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.metrics.RequestMetricCollector);
					public getSessionToken(param0: com.amazonaws.services.securitytoken.model.GetSessionTokenRequest): com.amazonaws.services.securitytoken.model.GetSessionTokenResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentials);
					public getSessionToken(): com.amazonaws.services.securitytoken.model.GetSessionTokenResult;
					public getCallerIdentity(param0: com.amazonaws.services.securitytoken.model.GetCallerIdentityRequest): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
					public getCallerIdentity(): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
					public shutdown(): void;
					public getCachedResponseMetadata(param0: com.amazonaws.AmazonWebServiceRequest): com.amazonaws.ResponseMetadata;
					/** @deprecated */
					public constructor();
					public getAccessKeyInfo(param0: com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest): com.amazonaws.services.securitytoken.model.GetAccessKeyInfoResult;
					public setEndpoint(param0: string): void;
					public constructor(param0: com.amazonaws.auth.AWSCredentials, param1: com.amazonaws.ClientConfiguration);
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider);
					/** @deprecated */
					public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.metrics.RequestMetricCollector);
					public decodeAuthorizationMessage(param0: com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest): com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageResult;
					public constructor(param0: com.amazonaws.ClientConfiguration);
					public assumeRole(param0: com.amazonaws.services.securitytoken.model.AssumeRoleRequest): com.amazonaws.services.securitytoken.model.AssumeRoleResult;
					public assumeRoleWithSAML(param0: com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
					public constructor(param0: com.amazonaws.auth.AWSCredentialsProvider, param1: com.amazonaws.ClientConfiguration, param2: com.amazonaws.http.HttpClient);
					/** @deprecated */
					public constructor(param0: com.amazonaws.ClientConfiguration);
					public assumeRoleWithWebIdentity(param0: com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
					public setRegion(param0: com.amazonaws.regions.Region): void;
					/** @deprecated */
					public setEndpoint(param0: string, param1: string, param2: string): void;
					/** @deprecated */
					public constructor(param0: com.amazonaws.ClientConfiguration, param1: com.amazonaws.http.HttpClient, param2: com.amazonaws.metrics.RequestMetricCollector);
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class AssumeRoleRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.AssumeRoleRequest>;
						public withPolicyArns(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public getTransitiveTagKeys(): java.util.List<string>;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setTags(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.Tag>): void;
						public withTokenCode(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public setPolicyArns(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): void;
						public getRoleSessionName(): string;
						public setRoleArn(param0: string): void;
						public setRoleSessionName(param0: string): void;
						public withTags(param0: native.Array<com.amazonaws.services.securitytoken.model.Tag>): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public withSerialNumber(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public withTransitiveTagKeys(param0: java.util.Collection<string>): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public getExternalId(): string;
						public getTags(): java.util.List<com.amazonaws.services.securitytoken.model.Tag>;
						public getRoleArn(): string;
						public getSerialNumber(): string;
						public getDurationSeconds(): java.lang.Integer;
						public constructor();
						public setTransitiveTagKeys(param0: java.util.Collection<string>): void;
						public withExternalId(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public getPolicyArns(): java.util.List<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>;
						public withRoleSessionName(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public getTokenCode(): string;
						public setTokenCode(param0: string): void;
						public getPolicy(): string;
						public setDurationSeconds(param0: java.lang.Integer): void;
						public withDurationSeconds(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public withRoleArn(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public toString(): string;
						public setPolicy(param0: string): void;
						public setExternalId(param0: string): void;
						public withPolicyArns(param0: native.Array<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public withTransitiveTagKeys(param0: native.Array<string>): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public withTags(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.Tag>): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
						public setSerialNumber(param0: string): void;
						public withPolicy(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class AssumeRoleResult {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.AssumeRoleResult>;
						public getPackedPolicySize(): java.lang.Integer;
						public constructor();
						public setPackedPolicySize(param0: java.lang.Integer): void;
						public withPackedPolicySize(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.AssumeRoleResult;
						public withCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): com.amazonaws.services.securitytoken.model.AssumeRoleResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAssumedRoleUser(): com.amazonaws.services.securitytoken.model.AssumedRoleUser;
						public toString(): string;
						public setCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): void;
						public getCredentials(): com.amazonaws.services.securitytoken.model.Credentials;
						public setAssumedRoleUser(param0: com.amazonaws.services.securitytoken.model.AssumedRoleUser): void;
						public withAssumedRoleUser(param0: com.amazonaws.services.securitytoken.model.AssumedRoleUser): com.amazonaws.services.securitytoken.model.AssumeRoleResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class AssumeRoleWithSAMLRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest>;
						public getDurationSeconds(): java.lang.Integer;
						public constructor();
						public setPrincipalArn(param0: string): void;
						public getPolicyArns(): java.util.List<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>;
						public withSAMLAssertion(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest;
						public withRoleArn(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withPolicyArns(param0: native.Array<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest;
						public getPolicy(): string;
						public setDurationSeconds(param0: java.lang.Integer): void;
						public setPolicyArns(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): void;
						public withPrincipalArn(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest;
						public toString(): string;
						public getSAMLAssertion(): string;
						public setRoleArn(param0: string): void;
						public setPolicy(param0: string): void;
						public withPolicy(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest;
						public withPolicyArns(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest;
						public withDurationSeconds(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest;
						public getPrincipalArn(): string;
						public setSAMLAssertion(param0: string): void;
						public getRoleArn(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class AssumeRoleWithSAMLResult {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult>;
						public getPackedPolicySize(): java.lang.Integer;
						public setPackedPolicySize(param0: java.lang.Integer): void;
						public getIssuer(): string;
						public getSubject(): string;
						public setIssuer(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getAudience(): string;
						public setAudience(param0: string): void;
						public setSubject(param0: string): void;
						public withNameQualifier(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
						public withPackedPolicySize(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
						public withSubject(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
						public getSubjectType(): string;
						public withSubjectType(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
						public setSubjectType(param0: string): void;
						public constructor();
						public withIssuer(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
						public setNameQualifier(param0: string): void;
						public getAssumedRoleUser(): com.amazonaws.services.securitytoken.model.AssumedRoleUser;
						public withCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
						public toString(): string;
						public setCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): void;
						public getNameQualifier(): string;
						public getCredentials(): com.amazonaws.services.securitytoken.model.Credentials;
						public withAudience(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
						public setAssumedRoleUser(param0: com.amazonaws.services.securitytoken.model.AssumedRoleUser): void;
						public withAssumedRoleUser(param0: com.amazonaws.services.securitytoken.model.AssumedRoleUser): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class AssumeRoleWithWebIdentityRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest>;
						public withPolicy(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest;
						public withProviderId(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setPolicyArns(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): void;
						public getRoleSessionName(): string;
						public setProviderId(param0: string): void;
						public withRoleArn(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest;
						public setWebIdentityToken(param0: string): void;
						public setRoleArn(param0: string): void;
						public setRoleSessionName(param0: string): void;
						public withRoleSessionName(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest;
						public getRoleArn(): string;
						public getDurationSeconds(): java.lang.Integer;
						public withDurationSeconds(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest;
						public constructor();
						public getPolicyArns(): java.util.List<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>;
						public withPolicyArns(param0: native.Array<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest;
						public getProviderId(): string;
						public getPolicy(): string;
						public setDurationSeconds(param0: java.lang.Integer): void;
						public toString(): string;
						public withWebIdentityToken(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest;
						public setPolicy(param0: string): void;
						public withPolicyArns(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest;
						public getWebIdentityToken(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class AssumeRoleWithWebIdentityResult {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult>;
						public getPackedPolicySize(): java.lang.Integer;
						public constructor();
						public setPackedPolicySize(param0: java.lang.Integer): void;
						public withAudience(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
						public withCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
						public setSubjectFromWebIdentityToken(param0: string): void;
						public getProvider(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withSubjectFromWebIdentityToken(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
						public getAssumedRoleUser(): com.amazonaws.services.securitytoken.model.AssumedRoleUser;
						public getAudience(): string;
						public toString(): string;
						public setCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): void;
						public withProvider(param0: string): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
						public setAudience(param0: string): void;
						public getCredentials(): com.amazonaws.services.securitytoken.model.Credentials;
						public getSubjectFromWebIdentityToken(): string;
						public setAssumedRoleUser(param0: com.amazonaws.services.securitytoken.model.AssumedRoleUser): void;
						public withAssumedRoleUser(param0: com.amazonaws.services.securitytoken.model.AssumedRoleUser): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
						public withPackedPolicySize(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
						public setProvider(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class AssumedRoleUser {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.AssumedRoleUser>;
						public constructor();
						public getAssumedRoleId(): string;
						public setAssumedRoleId(param0: string): void;
						public withAssumedRoleId(param0: string): com.amazonaws.services.securitytoken.model.AssumedRoleUser;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setArn(param0: string): void;
						public getArn(): string;
						public withArn(param0: string): com.amazonaws.services.securitytoken.model.AssumedRoleUser;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class Credentials {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.Credentials>;
						public getAccessKeyId(): string;
						public setExpiration(param0: java.util.Date): void;
						public constructor();
						public withSessionToken(param0: string): com.amazonaws.services.securitytoken.model.Credentials;
						public withAccessKeyId(param0: string): com.amazonaws.services.securitytoken.model.Credentials;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getSecretAccessKey(): string;
						public withSecretAccessKey(param0: string): com.amazonaws.services.securitytoken.model.Credentials;
						public toString(): string;
						public withExpiration(param0: java.util.Date): com.amazonaws.services.securitytoken.model.Credentials;
						public setSecretAccessKey(param0: string): void;
						public setSessionToken(param0: string): void;
						public constructor(param0: string, param1: string, param2: string, param3: java.util.Date);
						public setAccessKeyId(param0: string): void;
						public getSessionToken(): string;
						public getExpiration(): java.util.Date;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class DecodeAuthorizationMessageRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest>;
						public withEncodedMessage(param0: string): com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest;
						public constructor();
						public setEncodedMessage(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getEncodedMessage(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class DecodeAuthorizationMessageResult {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageResult>;
						public constructor();
						public withDecodedMessage(param0: string): com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getDecodedMessage(): string;
						public toString(): string;
						public setDecodedMessage(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class ExpiredTokenException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.ExpiredTokenException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class FederatedUser {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.FederatedUser>;
						public constructor();
						public getFederatedUserId(): string;
						public withFederatedUserId(param0: string): com.amazonaws.services.securitytoken.model.FederatedUser;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setArn(param0: string): void;
						public withArn(param0: string): com.amazonaws.services.securitytoken.model.FederatedUser;
						public constructor(param0: string, param1: string);
						public getArn(): string;
						public setFederatedUserId(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class GetAccessKeyInfoRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest>;
						public getAccessKeyId(): string;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setAccessKeyId(param0: string): void;
						public withAccessKeyId(param0: string): com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class GetAccessKeyInfoResult {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.GetAccessKeyInfoResult>;
						public constructor();
						public getAccount(): string;
						public withAccount(param0: string): com.amazonaws.services.securitytoken.model.GetAccessKeyInfoResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
						public setAccount(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class GetCallerIdentityRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.GetCallerIdentityRequest>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class GetCallerIdentityResult {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.GetCallerIdentityResult>;
						public getUserId(): string;
						public constructor();
						public getAccount(): string;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setArn(param0: string): void;
						public setUserId(param0: string): void;
						public withUserId(param0: string): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
						public getArn(): string;
						public toString(): string;
						public setAccount(param0: string): void;
						public withArn(param0: string): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
						public withAccount(param0: string): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class GetFederationTokenRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.GetFederationTokenRequest>;
						public getDurationSeconds(): java.lang.Integer;
						public constructor();
						public getPolicyArns(): java.util.List<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>;
						public setName(param0: string): void;
						public withName(param0: string): com.amazonaws.services.securitytoken.model.GetFederationTokenRequest;
						public withTags(param0: native.Array<com.amazonaws.services.securitytoken.model.Tag>): com.amazonaws.services.securitytoken.model.GetFederationTokenRequest;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getPolicy(): string;
						public setDurationSeconds(param0: java.lang.Integer): void;
						public withTags(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.Tag>): com.amazonaws.services.securitytoken.model.GetFederationTokenRequest;
						public setTags(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.Tag>): void;
						public withPolicyArns(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): com.amazonaws.services.securitytoken.model.GetFederationTokenRequest;
						public setPolicyArns(param0: java.util.Collection<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): void;
						public withDurationSeconds(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.GetFederationTokenRequest;
						public getName(): string;
						public toString(): string;
						public setPolicy(param0: string): void;
						public withPolicy(param0: string): com.amazonaws.services.securitytoken.model.GetFederationTokenRequest;
						public getTags(): java.util.List<com.amazonaws.services.securitytoken.model.Tag>;
						public withPolicyArns(param0: native.Array<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>): com.amazonaws.services.securitytoken.model.GetFederationTokenRequest;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class GetFederationTokenResult {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.GetFederationTokenResult>;
						public getPackedPolicySize(): java.lang.Integer;
						public withPackedPolicySize(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.GetFederationTokenResult;
						public constructor();
						public setPackedPolicySize(param0: java.lang.Integer): void;
						public withFederatedUser(param0: com.amazonaws.services.securitytoken.model.FederatedUser): com.amazonaws.services.securitytoken.model.GetFederationTokenResult;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public withCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): com.amazonaws.services.securitytoken.model.GetFederationTokenResult;
						public toString(): string;
						public setCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): void;
						public getCredentials(): com.amazonaws.services.securitytoken.model.Credentials;
						public getFederatedUser(): com.amazonaws.services.securitytoken.model.FederatedUser;
						public setFederatedUser(param0: com.amazonaws.services.securitytoken.model.FederatedUser): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class GetSessionTokenRequest extends com.amazonaws.AmazonWebServiceRequest {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.GetSessionTokenRequest>;
						public getDurationSeconds(): java.lang.Integer;
						public constructor();
						public withSerialNumber(param0: string): com.amazonaws.services.securitytoken.model.GetSessionTokenRequest;
						public getTokenCode(): string;
						public setTokenCode(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setDurationSeconds(param0: java.lang.Integer): void;
						public toString(): string;
						public withDurationSeconds(param0: java.lang.Integer): com.amazonaws.services.securitytoken.model.GetSessionTokenRequest;
						public setSerialNumber(param0: string): void;
						public getSerialNumber(): string;
						public withTokenCode(param0: string): com.amazonaws.services.securitytoken.model.GetSessionTokenRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class GetSessionTokenResult {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.GetSessionTokenResult>;
						public setCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): void;
						public withCredentials(param0: com.amazonaws.services.securitytoken.model.Credentials): com.amazonaws.services.securitytoken.model.GetSessionTokenResult;
						public constructor();
						public getCredentials(): com.amazonaws.services.securitytoken.model.Credentials;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class IDPCommunicationErrorException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.IDPCommunicationErrorException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class IDPRejectedClaimException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.IDPRejectedClaimException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class InvalidAuthorizationMessageException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.InvalidAuthorizationMessageException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class InvalidIdentityTokenException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.InvalidIdentityTokenException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class MalformedPolicyDocumentException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.MalformedPolicyDocumentException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class PackedPolicyTooLargeException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.PackedPolicyTooLargeException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class PolicyDescriptorType {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.PolicyDescriptorType>;
						public constructor();
						public hashCode(): number;
						public equals(param0: any): boolean;
						public setArn(param0: string): void;
						public withArn(param0: string): com.amazonaws.services.securitytoken.model.PolicyDescriptorType;
						public getArn(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class RegionDisabledException extends com.amazonaws.AmazonServiceException {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.RegionDisabledException>;
						public constructor(param0: string, param1: java.lang.Exception);
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export class Tag {
						public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.Tag>;
						public withValue(param0: string): com.amazonaws.services.securitytoken.model.Tag;
						public constructor();
						public setValue(param0: string): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getValue(): string;
						public withKey(param0: string): com.amazonaws.services.securitytoken.model.Tag;
						public getKey(): string;
						public setKey(param0: string): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class AssumeRoleRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.securitytoken.model.AssumeRoleRequest>,com.amazonaws.services.securitytoken.model.AssumeRoleRequest> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.AssumeRoleRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.securitytoken.model.AssumeRoleRequest): com.amazonaws.Request<com.amazonaws.services.securitytoken.model.AssumeRoleRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class AssumeRoleResultStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.AssumeRoleResult,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.AssumeRoleResultStaxUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.AssumeRoleResult;
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.AssumeRoleResultStaxUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class AssumeRoleWithSAMLRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest>,com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.AssumeRoleWithSAMLRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest): com.amazonaws.Request<com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class AssumeRoleWithSAMLResultStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.AssumeRoleWithSAMLResultStaxUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.AssumeRoleWithSAMLResultStaxUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.AssumeRoleWithSAMLResult;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class AssumeRoleWithWebIdentityRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest>,com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.AssumeRoleWithWebIdentityRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest): com.amazonaws.Request<com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class AssumeRoleWithWebIdentityResultStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.AssumeRoleWithWebIdentityResultStaxUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.AssumeRoleWithWebIdentityResult;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.AssumeRoleWithWebIdentityResultStaxUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class AssumedRoleUserStaxMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.AssumedRoleUserStaxMarshaller>;
							public marshall(param0: com.amazonaws.services.securitytoken.model.AssumedRoleUser, param1: com.amazonaws.Request<any>, param2: string): void;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.AssumedRoleUserStaxMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class AssumedRoleUserStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.AssumedRoleUser,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.AssumedRoleUserStaxUnmarshaller>;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.AssumedRoleUserStaxUnmarshaller;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.AssumedRoleUser;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class CredentialsStaxMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.CredentialsStaxMarshaller>;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.CredentialsStaxMarshaller;
							public marshall(param0: com.amazonaws.services.securitytoken.model.Credentials, param1: com.amazonaws.Request<any>, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class CredentialsStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.Credentials,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.CredentialsStaxUnmarshaller>;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.Credentials;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.CredentialsStaxUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class DecodeAuthorizationMessageRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest>,com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.DecodeAuthorizationMessageRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest): com.amazonaws.Request<com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageRequest>;
							public marshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class DecodeAuthorizationMessageResultStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageResult,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.DecodeAuthorizationMessageResultStaxUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.DecodeAuthorizationMessageResult;
							public unmarshall(param0: any): any;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.DecodeAuthorizationMessageResultStaxUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class ExpiredTokenExceptionUnmarshaller extends com.amazonaws.transform.StandardErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.ExpiredTokenExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public unmarshall(param0: any): any;
							public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class FederatedUserStaxMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.FederatedUserStaxMarshaller>;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.FederatedUserStaxMarshaller;
							public marshall(param0: com.amazonaws.services.securitytoken.model.FederatedUser, param1: com.amazonaws.Request<any>, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class FederatedUserStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.FederatedUser,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.FederatedUserStaxUnmarshaller>;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.FederatedUserStaxUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.FederatedUser;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class GetAccessKeyInfoRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest>,com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.GetAccessKeyInfoRequestMarshaller>;
							public constructor();
							public marshall(param0: com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest): com.amazonaws.Request<com.amazonaws.services.securitytoken.model.GetAccessKeyInfoRequest>;
							public marshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class GetAccessKeyInfoResultStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.GetAccessKeyInfoResult,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.GetAccessKeyInfoResultStaxUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.GetAccessKeyInfoResultStaxUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.GetAccessKeyInfoResult;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class GetCallerIdentityRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.securitytoken.model.GetCallerIdentityRequest>,com.amazonaws.services.securitytoken.model.GetCallerIdentityRequest> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.GetCallerIdentityRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.securitytoken.model.GetCallerIdentityRequest): com.amazonaws.Request<com.amazonaws.services.securitytoken.model.GetCallerIdentityRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class GetCallerIdentityResultStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.GetCallerIdentityResult,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.GetCallerIdentityResultStaxUnmarshaller>;
							public constructor();
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.GetCallerIdentityResult;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.GetCallerIdentityResultStaxUnmarshaller;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class GetFederationTokenRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.securitytoken.model.GetFederationTokenRequest>,com.amazonaws.services.securitytoken.model.GetFederationTokenRequest> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.GetFederationTokenRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.securitytoken.model.GetFederationTokenRequest): com.amazonaws.Request<com.amazonaws.services.securitytoken.model.GetFederationTokenRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class GetFederationTokenResultStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.GetFederationTokenResult,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.GetFederationTokenResultStaxUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.GetFederationTokenResultStaxUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.GetFederationTokenResult;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class GetSessionTokenRequestMarshaller extends com.amazonaws.transform.Marshaller<com.amazonaws.Request<com.amazonaws.services.securitytoken.model.GetSessionTokenRequest>,com.amazonaws.services.securitytoken.model.GetSessionTokenRequest> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.GetSessionTokenRequestMarshaller>;
							public constructor();
							public marshall(param0: any): any;
							public marshall(param0: com.amazonaws.services.securitytoken.model.GetSessionTokenRequest): com.amazonaws.Request<com.amazonaws.services.securitytoken.model.GetSessionTokenRequest>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class GetSessionTokenResultStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.GetSessionTokenResult,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.GetSessionTokenResultStaxUnmarshaller>;
							public constructor();
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.GetSessionTokenResultStaxUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.GetSessionTokenResult;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class IDPCommunicationErrorExceptionUnmarshaller extends com.amazonaws.transform.StandardErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.IDPCommunicationErrorExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public unmarshall(param0: any): any;
							public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class IDPRejectedClaimExceptionUnmarshaller extends com.amazonaws.transform.StandardErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.IDPRejectedClaimExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public unmarshall(param0: any): any;
							public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class InvalidAuthorizationMessageExceptionUnmarshaller extends com.amazonaws.transform.StandardErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.InvalidAuthorizationMessageExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public unmarshall(param0: any): any;
							public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class InvalidIdentityTokenExceptionUnmarshaller extends com.amazonaws.transform.StandardErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.InvalidIdentityTokenExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public unmarshall(param0: any): any;
							public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class MalformedPolicyDocumentExceptionUnmarshaller extends com.amazonaws.transform.StandardErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.MalformedPolicyDocumentExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public unmarshall(param0: any): any;
							public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class PackedPolicyTooLargeExceptionUnmarshaller extends com.amazonaws.transform.StandardErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.PackedPolicyTooLargeExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public unmarshall(param0: any): any;
							public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class PolicyDescriptorTypeStaxMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.PolicyDescriptorTypeStaxMarshaller>;
							public marshall(param0: com.amazonaws.services.securitytoken.model.PolicyDescriptorType, param1: com.amazonaws.Request<any>, param2: string): void;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.PolicyDescriptorTypeStaxMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class PolicyDescriptorTypeStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.PolicyDescriptorType,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.PolicyDescriptorTypeStaxUnmarshaller>;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.PolicyDescriptorTypeStaxUnmarshaller;
							public unmarshall(param0: any): any;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.PolicyDescriptorType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class RegionDisabledExceptionUnmarshaller extends com.amazonaws.transform.StandardErrorUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.RegionDisabledExceptionUnmarshaller>;
							public constructor();
							public constructor(param0: java.lang.Class<any>);
							public unmarshall(param0: any): any;
							public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class TagStaxMarshaller {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.TagStaxMarshaller>;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.TagStaxMarshaller;
							public marshall(param0: com.amazonaws.services.securitytoken.model.Tag, param1: com.amazonaws.Request<any>, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module services {
			export module securitytoken {
				export module model {
					export module transform {
						export class TagStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.services.securitytoken.model.Tag,com.amazonaws.transform.StaxUnmarshallerContext> {
							public static class: java.lang.Class<com.amazonaws.services.securitytoken.model.transform.TagStaxUnmarshaller>;
							public static getInstance(): com.amazonaws.services.securitytoken.model.transform.TagStaxUnmarshaller;
							public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): com.amazonaws.services.securitytoken.model.Tag;
							public unmarshall(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export abstract class AbstractErrorUnmarshaller<T>  extends com.amazonaws.transform.Unmarshaller<com.amazonaws.AmazonServiceException,any> {
				public static class: java.lang.Class<com.amazonaws.transform.AbstractErrorUnmarshaller<any>>;
				public exceptionClass: java.lang.Class<any>;
				public constructor(param0: java.lang.Class<any>);
				public unmarshall(param0: any): any;
				public newException(param0: string): com.amazonaws.AmazonServiceException;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class JsonErrorUnmarshaller extends com.amazonaws.transform.AbstractErrorUnmarshaller<com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse> {
				public static class: java.lang.Class<com.amazonaws.transform.JsonErrorUnmarshaller>;
				public constructor(param0: java.lang.Class<any>);
				public unmarshall(param0: any): any;
				public unmarshall(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): com.amazonaws.AmazonServiceException;
				public match(param0: com.amazonaws.http.JsonErrorResponseHandler.JsonErrorResponse): boolean;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class JsonUnmarshallerContext {
				public static class: java.lang.Class<com.amazonaws.transform.JsonUnmarshallerContext>;
				public getHttpResponse(): com.amazonaws.http.HttpResponse;
				public constructor(param0: com.amazonaws.util.json.AwsJsonReader);
				public getReader(): com.amazonaws.util.json.AwsJsonReader;
				public constructor(param0: com.amazonaws.util.json.AwsJsonReader, param1: com.amazonaws.http.HttpResponse);
				public getHeader(param0: string): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class LegacyErrorUnmarshaller extends com.amazonaws.transform.Unmarshaller<com.amazonaws.AmazonServiceException,org.w3c.dom.Node> {
				public static class: java.lang.Class<com.amazonaws.transform.LegacyErrorUnmarshaller>;
				public constructor(param0: java.lang.Class<any>);
				public unmarshall(param0: any): any;
				public parseErrorCode(param0: org.w3c.dom.Node): string;
				public getErrorPropertyPath(param0: string): string;
				public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class ListUnmarshaller<T>  extends com.amazonaws.transform.Unmarshaller<java.util.List<any>,com.amazonaws.transform.JsonUnmarshallerContext> {
				public static class: java.lang.Class<com.amazonaws.transform.ListUnmarshaller<any>>;
				public unmarshall(param0: any): any;
				public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.util.List<any>;
				public constructor(param0: com.amazonaws.transform.Unmarshaller<any,com.amazonaws.transform.JsonUnmarshallerContext>);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class MapEntry<K, V>  extends java.util.Map.Entry<any,any> {
				public static class: java.lang.Class<com.amazonaws.transform.MapEntry<any,any>>;
				public getKey(): any;
				public setKey(param0: any): any;
				public getValue(): any;
				public setValue(param0: any): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class MapUnmarshaller<V>  extends com.amazonaws.transform.Unmarshaller<java.util.Map<string,any>,com.amazonaws.transform.JsonUnmarshallerContext> {
				public static class: java.lang.Class<com.amazonaws.transform.MapUnmarshaller<any>>;
				public unmarshall(param0: any): any;
				public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.util.Map<string,any>;
				public constructor(param0: com.amazonaws.transform.Unmarshaller<any,com.amazonaws.transform.JsonUnmarshallerContext>);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class Marshaller<T, R>  extends java.lang.Object {
				public static class: java.lang.Class<com.amazonaws.transform.Marshaller<any,any>>;
				/**
				 * Constructs a new instance of the com.amazonaws.transform.Marshaller<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					marshall(param0: R): T;
				});
				public constructor();
				public marshall(param0: R): T;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class SimpleTypeJsonUnmarshallers {
				public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers>;
				public constructor();
			}
			export module SimpleTypeJsonUnmarshallers {
				export class BigDecimalJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.math.BigDecimal,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.BigDecimalJsonUnmarshaller>;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.BigDecimalJsonUnmarshaller;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.math.BigDecimal;
					public constructor();
					public unmarshall(param0: any): any;
				}
				export class BigIntegerJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.math.BigInteger,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.BigIntegerJsonUnmarshaller>;
					public constructor();
					public unmarshall(param0: any): any;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.BigIntegerJsonUnmarshaller;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.math.BigInteger;
				}
				export class BooleanJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Boolean,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller>;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.lang.Boolean;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.BooleanJsonUnmarshaller;
					public constructor();
					public unmarshall(param0: any): any;
				}
				export class ByteBufferJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.nio.ByteBuffer,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.ByteBufferJsonUnmarshaller>;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.ByteBufferJsonUnmarshaller;
					public constructor();
					public unmarshall(param0: any): any;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.nio.ByteBuffer;
				}
				export class ByteJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Byte,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.ByteJsonUnmarshaller>;
					public constructor();
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.lang.Byte;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.ByteJsonUnmarshaller;
					public unmarshall(param0: any): any;
				}
				export class DateJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.util.Date,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.DateJsonUnmarshaller>;
					public constructor();
					public unmarshall(param0: any): any;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.util.Date;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.DateJsonUnmarshaller;
				}
				export class DoubleJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Double,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.DoubleJsonUnmarshaller>;
					public constructor();
					public unmarshall(param0: any): any;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.lang.Double;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.DoubleJsonUnmarshaller;
				}
				export class FloatJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Float,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.FloatJsonUnmarshaller>;
					public constructor();
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.FloatJsonUnmarshaller;
					public unmarshall(param0: any): any;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.lang.Float;
				}
				export class IntegerJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Integer,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.IntegerJsonUnmarshaller>;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.IntegerJsonUnmarshaller;
					public constructor();
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.lang.Integer;
					public unmarshall(param0: any): any;
				}
				export class LongJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Long,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.LongJsonUnmarshaller>;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): java.lang.Long;
					public constructor();
					public unmarshall(param0: any): any;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.LongJsonUnmarshaller;
				}
				export class StringJsonUnmarshaller extends com.amazonaws.transform.Unmarshaller<string,com.amazonaws.transform.JsonUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller>;
					public constructor();
					public unmarshall(param0: any): any;
					public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): string;
					public static getInstance(): com.amazonaws.transform.SimpleTypeJsonUnmarshallers.StringJsonUnmarshaller;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class SimpleTypeStaxUnmarshallers {
				public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers>;
				public constructor();
			}
			export module SimpleTypeStaxUnmarshallers {
				export class BigDecimalStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.math.BigDecimal,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.BigDecimalStaxUnmarshaller>;
					public constructor();
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.BigDecimalStaxUnmarshaller;
					public unmarshall(param0: any): any;
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.math.BigDecimal;
				}
				export class BigIntegerStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.math.BigInteger,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.BigIntegerStaxUnmarshaller>;
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.BigIntegerStaxUnmarshaller;
					public constructor();
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.math.BigInteger;
					public unmarshall(param0: any): any;
				}
				export class BooleanStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Boolean,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.BooleanStaxUnmarshaller>;
					public constructor();
					public unmarshall(param0: any): any;
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.lang.Boolean;
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.BooleanStaxUnmarshaller;
				}
				export class ByteBufferStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.nio.ByteBuffer,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.ByteBufferStaxUnmarshaller>;
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.nio.ByteBuffer;
					public constructor();
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.ByteBufferStaxUnmarshaller;
					public unmarshall(param0: any): any;
				}
				export class ByteStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Byte,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.ByteStaxUnmarshaller>;
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.lang.Byte;
					public constructor();
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.ByteStaxUnmarshaller;
					public unmarshall(param0: any): any;
				}
				export class DateStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.util.Date,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.DateStaxUnmarshaller>;
					public constructor();
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.util.Date;
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.DateStaxUnmarshaller;
					public unmarshall(param0: any): any;
				}
				export class DoubleStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Double,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.DoubleStaxUnmarshaller>;
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.lang.Double;
					public constructor();
					public unmarshall(param0: any): any;
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.DoubleStaxUnmarshaller;
				}
				export class FloatStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Float,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.FloatStaxUnmarshaller>;
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.FloatStaxUnmarshaller;
					public constructor();
					public unmarshall(param0: any): any;
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.lang.Float;
				}
				export class IntegerStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Integer,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.IntegerStaxUnmarshaller>;
					public constructor();
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.lang.Integer;
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.IntegerStaxUnmarshaller;
					public unmarshall(param0: any): any;
				}
				export class LongStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Long,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.LongStaxUnmarshaller>;
					public constructor();
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): java.lang.Long;
					public unmarshall(param0: any): any;
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.LongStaxUnmarshaller;
				}
				export class StringStaxUnmarshaller extends com.amazonaws.transform.Unmarshaller<string,com.amazonaws.transform.StaxUnmarshallerContext> {
					public static class: java.lang.Class<com.amazonaws.transform.SimpleTypeStaxUnmarshallers.StringStaxUnmarshaller>;
					public constructor();
					public unmarshall(param0: any): any;
					public static getInstance(): com.amazonaws.transform.SimpleTypeStaxUnmarshallers.StringStaxUnmarshaller;
					public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): string;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class StandardErrorUnmarshaller extends com.amazonaws.transform.AbstractErrorUnmarshaller<org.w3c.dom.Node> {
				public static class: java.lang.Class<com.amazonaws.transform.StandardErrorUnmarshaller>;
				public constructor(param0: java.lang.Class<any>);
				public unmarshall(param0: any): any;
				public parseErrorCode(param0: org.w3c.dom.Node): string;
				public getErrorPropertyPath(param0: string): string;
				public unmarshall(param0: org.w3c.dom.Node): com.amazonaws.AmazonServiceException;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class StaxUnmarshallerContext {
				public static class: java.lang.Class<com.amazonaws.transform.StaxUnmarshallerContext>;
				public stack: java.util.Deque<string>;
				public getCurrentDepth(): number;
				public getMetadata(): java.util.Map<string,string>;
				public registerMetadataExpression(param0: string, param1: number, param2: string): void;
				public nextEvent(): number;
				public testExpression(param0: string): boolean;
				public constructor(param0: org.xmlpull.v1.XmlPullParser, param1: java.util.Map<string,string>);
				public testExpression(param0: string, param1: number): boolean;
				public isStartOfDocument(): boolean;
				public getHeader(param0: string): string;
				public readText(): string;
				public constructor(param0: org.xmlpull.v1.XmlPullParser);
			}
			export module StaxUnmarshallerContext {
				export class MetadataExpression {
					public static class: java.lang.Class<com.amazonaws.transform.StaxUnmarshallerContext.MetadataExpression>;
					public expression: string;
					public targetDepth: number;
					public key: string;
					public constructor(param0: string, param1: number, param2: string);
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class Unmarshaller<T, R>  extends java.lang.Object {
				public static class: java.lang.Class<com.amazonaws.transform.Unmarshaller<any,any>>;
				/**
				 * Constructs a new instance of the com.amazonaws.transform.Unmarshaller<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					unmarshall(param0: R): T;
				});
				public constructor();
				public unmarshall(param0: R): T;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class VoidJsonUnmarshaller<T>  extends com.amazonaws.transform.Unmarshaller<any,com.amazonaws.transform.JsonUnmarshallerContext> {
				public static class: java.lang.Class<com.amazonaws.transform.VoidJsonUnmarshaller<any>>;
				public unmarshall(param0: com.amazonaws.transform.JsonUnmarshallerContext): any;
				public unmarshall(param0: any): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class VoidStaxUnmarshaller<T>  extends com.amazonaws.transform.Unmarshaller<any,com.amazonaws.transform.StaxUnmarshallerContext> {
				public static class: java.lang.Class<com.amazonaws.transform.VoidStaxUnmarshaller<any>>;
				public unmarshall(param0: any): any;
				public unmarshall(param0: com.amazonaws.transform.StaxUnmarshallerContext): any;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module transform {
			export class VoidUnmarshaller extends com.amazonaws.transform.Unmarshaller<java.lang.Void,org.w3c.dom.Node> {
				public static class: java.lang.Class<com.amazonaws.transform.VoidUnmarshaller>;
				public unmarshall(param0: any): any;
				public unmarshall(param0: org.w3c.dom.Node): java.lang.Void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class AWSRequestMetrics {
				public static class: java.lang.Class<com.amazonaws.util.AWSRequestMetrics>;
				public timingInfo: com.amazonaws.util.TimingInfo;
				public incrementCounter(param0: string): void;
				public setCounter(param0: com.amazonaws.metrics.MetricType, param1: number): void;
				public constructor(param0: com.amazonaws.util.TimingInfo);
				public incrementCounter(param0: com.amazonaws.metrics.MetricType): void;
				public startEvent(param0: com.amazonaws.metrics.MetricType): void;
				public getProperty(param0: string): java.util.List<any>;
				public addProperty(param0: com.amazonaws.metrics.MetricType, param1: any): void;
				public startEvent(param0: string): void;
				public getTimingInfo(): com.amazonaws.util.TimingInfo;
				public constructor();
				public setCounter(param0: string, param1: number): void;
				public addProperty(param0: string, param1: any): void;
				public endEvent(param0: string): void;
				public getProperty(param0: com.amazonaws.metrics.MetricType): java.util.List<any>;
				public isEnabled(): boolean;
				public log(): void;
				public endEvent(param0: com.amazonaws.metrics.MetricType): void;
			}
			export module AWSRequestMetrics {
				export class Field extends com.amazonaws.metrics.RequestMetricType {
					public static class: java.lang.Class<com.amazonaws.util.AWSRequestMetrics.Field>;
					public static AWSErrorCode: com.amazonaws.util.AWSRequestMetrics.Field;
					public static AWSRequestID: com.amazonaws.util.AWSRequestMetrics.Field;
					public static BytesProcessed: com.amazonaws.util.AWSRequestMetrics.Field;
					public static ClientExecuteTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static CredentialsRequestTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static Exception: com.amazonaws.util.AWSRequestMetrics.Field;
					public static HttpRequestTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static RedirectLocation: com.amazonaws.util.AWSRequestMetrics.Field;
					public static RequestMarshallTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static RequestSigningTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static ResponseProcessingTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static RequestCount: com.amazonaws.util.AWSRequestMetrics.Field;
					public static RetryCount: com.amazonaws.util.AWSRequestMetrics.Field;
					public static HttpClientRetryCount: com.amazonaws.util.AWSRequestMetrics.Field;
					public static HttpClientSendRequestTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static HttpClientReceiveResponseTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static HttpClientPoolAvailableCount: com.amazonaws.util.AWSRequestMetrics.Field;
					public static HttpClientPoolLeasedCount: com.amazonaws.util.AWSRequestMetrics.Field;
					public static HttpClientPoolPendingCount: com.amazonaws.util.AWSRequestMetrics.Field;
					public static RetryPauseTime: com.amazonaws.util.AWSRequestMetrics.Field;
					public static ServiceEndpoint: com.amazonaws.util.AWSRequestMetrics.Field;
					public static ServiceName: com.amazonaws.util.AWSRequestMetrics.Field;
					public static StatusCode: com.amazonaws.util.AWSRequestMetrics.Field;
					public name(): string;
					public static valueOf(param0: string): com.amazonaws.util.AWSRequestMetrics.Field;
					public static values(): native.Array<com.amazonaws.util.AWSRequestMetrics.Field>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class AWSRequestMetricsFullSupport extends com.amazonaws.util.AWSRequestMetrics {
				public static class: java.lang.Class<com.amazonaws.util.AWSRequestMetricsFullSupport>;
				public incrementCounter(param0: string): void;
				public setCounter(param0: com.amazonaws.metrics.MetricType, param1: number): void;
				public constructor(param0: com.amazonaws.util.TimingInfo);
				public incrementCounter(param0: com.amazonaws.metrics.MetricType): void;
				public startEvent(param0: com.amazonaws.metrics.MetricType): void;
				public getProperty(param0: string): java.util.List<any>;
				public addProperty(param0: com.amazonaws.metrics.MetricType, param1: any): void;
				public startEvent(param0: string): void;
				public constructor();
				public setCounter(param0: string, param1: number): void;
				public addProperty(param0: string, param1: any): void;
				public endEvent(param0: string): void;
				public getProperty(param0: com.amazonaws.metrics.MetricType): java.util.List<any>;
				public isEnabled(): boolean;
				public log(): void;
				public endEvent(param0: com.amazonaws.metrics.MetricType): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class AWSServiceMetrics extends com.amazonaws.metrics.ServiceMetricType {
				public static class: java.lang.Class<com.amazonaws.util.AWSServiceMetrics>;
				public static HttpClientGetConnectionTime: com.amazonaws.util.AWSServiceMetrics;
				public getServiceName(): string;
				public static valueOf(param0: string): com.amazonaws.util.AWSServiceMetrics;
				public name(): string;
				public static values(): native.Array<com.amazonaws.util.AWSServiceMetrics>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export abstract class AbstractBase32Codec extends com.amazonaws.util.Codec {
				public static class: java.lang.Class<com.amazonaws.util.AbstractBase32Codec>;
				public constructor(param0: native.Array<number>);
				public pos(param0: number): number;
				public encode(param0: native.Array<number>): native.Array<number>;
				public decode(param0: native.Array<number>, param1: number): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class AwsHostNameUtils {
				public static class: java.lang.Class<com.amazonaws.util.AwsHostNameUtils>;
				public static parseRegionName(param0: string, param1: string): string;
				public static localHostName(): string;
				/** @deprecated */
				public static parseServiceName(param0: java.net.URI): string;
				/** @deprecated */
				public static parseRegionName(param0: java.net.URI): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Base16 {
				public static class: java.lang.Class<com.amazonaws.util.Base16>;
				public static values(): native.Array<com.amazonaws.util.Base16>;
				public static valueOf(param0: string): com.amazonaws.util.Base16;
				public static encode(param0: native.Array<number>): native.Array<number>;
				public static encodeAsString(param0: native.Array<number>): string;
				public static decode(param0: native.Array<number>): native.Array<number>;
				public static decode(param0: string): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Base16Codec extends com.amazonaws.util.Codec {
				public static class: java.lang.Class<com.amazonaws.util.Base16Codec>;
				public pos(param0: number): number;
				public encode(param0: native.Array<number>): native.Array<number>;
				public decode(param0: native.Array<number>, param1: number): native.Array<number>;
			}
			export module Base16Codec {
				export class LazyHolder {
					public static class: java.lang.Class<com.amazonaws.util.Base16Codec.LazyHolder>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Base32 {
				public static class: java.lang.Class<com.amazonaws.util.Base32>;
				public static encode(param0: native.Array<number>): native.Array<number>;
				public static encodeAsString(param0: native.Array<number>): string;
				public static values(): native.Array<com.amazonaws.util.Base32>;
				public static decode(param0: native.Array<number>): native.Array<number>;
				public static decode(param0: string): native.Array<number>;
				public static valueOf(param0: string): com.amazonaws.util.Base32;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Base32Codec extends com.amazonaws.util.AbstractBase32Codec {
				public static class: java.lang.Class<com.amazonaws.util.Base32Codec>;
				public pos(param0: number): number;
				public encode(param0: native.Array<number>): native.Array<number>;
				public decode(param0: native.Array<number>, param1: number): native.Array<number>;
			}
			export module Base32Codec {
				export class LazyHolder {
					public static class: java.lang.Class<com.amazonaws.util.Base32Codec.LazyHolder>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Base64 {
				public static class: java.lang.Class<com.amazonaws.util.Base64>;
				public static encode(param0: native.Array<number>): native.Array<number>;
				public static encodeAsString(param0: native.Array<number>): string;
				public static valueOf(param0: string): com.amazonaws.util.Base64;
				public static values(): native.Array<com.amazonaws.util.Base64>;
				public static decode(param0: native.Array<number>): native.Array<number>;
				public static decode(param0: string): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Base64Codec extends com.amazonaws.util.Codec {
				public static class: java.lang.Class<com.amazonaws.util.Base64Codec>;
				public constructor(param0: native.Array<number>);
				public pos(param0: number): number;
				public encode(param0: native.Array<number>): native.Array<number>;
				public decode(param0: native.Array<number>, param1: number): native.Array<number>;
			}
			export module Base64Codec {
				export class LazyHolder {
					public static class: java.lang.Class<com.amazonaws.util.Base64Codec.LazyHolder>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class BinaryUtils {
				public static class: java.lang.Class<com.amazonaws.util.BinaryUtils>;
				public static copyAllBytesFrom(param0: java.nio.ByteBuffer): native.Array<number>;
				public static toBase64(param0: native.Array<number>): string;
				public static toStream(param0: java.nio.ByteBuffer): java.io.InputStream;
				public static fromHex(param0: string): native.Array<number>;
				public static fromBase64(param0: string): native.Array<number>;
				public static toHex(param0: native.Array<number>): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class CRC32ChecksumCalculatingInputStream extends com.amazonaws.internal.SdkFilterInputStream {
				public static class: java.lang.Class<com.amazonaws.util.CRC32ChecksumCalculatingInputStream>;
				public reset(): void;
				public getCRC32Checksum(): number;
				public read(): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class ClassLoaderHelper {
				public static class: java.lang.Class<com.amazonaws.util.ClassLoaderHelper>;
				public static values(): native.Array<com.amazonaws.util.ClassLoaderHelper>;
				public static loadClass(param0: string, param1: boolean, param2: native.Array<java.lang.Class<any>>): java.lang.Class<any>;
				public static loadClass(param0: string, param1: native.Array<java.lang.Class<any>>): java.lang.Class<any>;
				public static valueOf(param0: string): com.amazonaws.util.ClassLoaderHelper;
				public static getResource(param0: string, param1: native.Array<java.lang.Class<any>>): java.net.URL;
				public static getResourceAsStream(param0: string, param1: boolean, param2: native.Array<java.lang.Class<any>>): java.io.InputStream;
				public static getResourceAsStream(param0: string, param1: native.Array<java.lang.Class<any>>): java.io.InputStream;
				public static getResource(param0: string, param1: boolean, param2: native.Array<java.lang.Class<any>>): java.net.URL;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Classes {
				public static class: java.lang.Class<com.amazonaws.util.Classes>;
				public static values(): native.Array<com.amazonaws.util.Classes>;
				public static childClassOf(param0: java.lang.Class<any>, param1: any): java.lang.Class<any>;
				public static jarFileOf(param0: java.lang.Class<any>): java.util.jar.JarFile;
				public static valueOf(param0: string): com.amazonaws.util.Classes;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Codec {
				public static class: java.lang.Class<com.amazonaws.util.Codec>;
				/**
				 * Constructs a new instance of the com.amazonaws.util.Codec interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					encode(param0: native.Array<number>): native.Array<number>;
					decode(param0: native.Array<number>, param1: number): native.Array<number>;
				});
				public constructor();
				public encode(param0: native.Array<number>): native.Array<number>;
				public decode(param0: native.Array<number>, param1: number): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class CodecUtils {
				public static class: java.lang.Class<com.amazonaws.util.CodecUtils>;
				public static toStringDirect(param0: native.Array<number>): string;
				public static valueOf(param0: string): com.amazonaws.util.CodecUtils;
				public static values(): native.Array<com.amazonaws.util.CodecUtils>;
				public static toBytesDirect(param0: string): native.Array<number>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class CountingInputStream extends com.amazonaws.internal.SdkFilterInputStream {
				public static class: java.lang.Class<com.amazonaws.util.CountingInputStream>;
				public read(): number;
				public getByteCount(): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class DateUtils {
				public static class: java.lang.Class<com.amazonaws.util.DateUtils>;
				public static ISO8601_DATE_PATTERN: string;
				public static ALTERNATE_ISO8601_DATE_PATTERN: string;
				public static RFC822_DATE_PATTERN: string;
				public static COMPRESSED_DATE_PATTERN: string;
				public static parseCompressedISO8601Date(param0: string): java.util.Date;
				public static formatRFC822Date(param0: java.util.Date): string;
				public static cloneDate(param0: java.util.Date): java.util.Date;
				public static parseISO8601Date(param0: string): java.util.Date;
				public static format(param0: string, param1: java.util.Date): string;
				public static formatISO8601Date(param0: java.util.Date): string;
				public static parse(param0: string, param1: string): java.util.Date;
				public static parseRFC822Date(param0: string): java.util.Date;
				public constructor();
				public static numberOfDaysSinceEpoch(param0: number): number;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class EncodingScheme {
				public static class: java.lang.Class<com.amazonaws.util.EncodingScheme>;
				/**
				 * Constructs a new instance of the com.amazonaws.util.EncodingScheme interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					encodeAsString(param0: native.Array<number>): string;
					decode(param0: string): native.Array<number>;
				});
				public constructor();
				public decode(param0: string): native.Array<number>;
				public encodeAsString(param0: native.Array<number>): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export abstract class EncodingSchemeEnum extends com.amazonaws.util.EncodingScheme {
				public static class: java.lang.Class<com.amazonaws.util.EncodingSchemeEnum>;
				public static BASE16: com.amazonaws.util.EncodingSchemeEnum;
				public static BASE32: com.amazonaws.util.EncodingSchemeEnum;
				public static BASE64: com.amazonaws.util.EncodingSchemeEnum;
				public static valueOf(param0: string): com.amazonaws.util.EncodingSchemeEnum;
				public decode(param0: string): native.Array<number>;
				public static values(): native.Array<com.amazonaws.util.EncodingSchemeEnum>;
				public encodeAsString(param0: native.Array<number>): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class HttpClientWrappingInputStream extends com.amazonaws.internal.SdkFilterInputStream {
				public static class: java.lang.Class<com.amazonaws.util.HttpClientWrappingInputStream>;
				public close(): void;
				public constructor(param0: org.apache.http.client.HttpClient, param1: java.io.InputStream);
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class HttpUtils {
				public static class: java.lang.Class<com.amazonaws.util.HttpUtils>;
				public static urlDecode(param0: string): string;
				public static fetchFile(param0: java.net.URI, param1: com.amazonaws.ClientConfiguration): java.io.InputStream;
				public static appendUri(param0: string, param1: string, param2: boolean): string;
				public static urlEncode(param0: string, param1: boolean): string;
				public static encodeParameters(param0: com.amazonaws.Request<any>): string;
				public static appendUri(param0: string, param1: string): string;
				public static isUsingNonDefaultPort(param0: java.net.URI): boolean;
				public constructor();
				public static usePayloadForQueryParameters(param0: com.amazonaws.Request<any>): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class IOUtils {
				public static class: java.lang.Class<com.amazonaws.util.IOUtils>;
				public static toString(param0: java.io.InputStream): string;
				public static closeQuietly(param0: java.io.Closeable, param1: com.amazonaws.logging.Log): void;
				public static copy(param0: java.io.InputStream, param1: java.io.OutputStream): number;
				public static valueOf(param0: string): com.amazonaws.util.IOUtils;
				public static values(): native.Array<com.amazonaws.util.IOUtils>;
				public static toByteArray(param0: java.io.InputStream): native.Array<number>;
				public static release(param0: java.io.Closeable, param1: com.amazonaws.logging.Log): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class ImmutableMapParameter<K, V>  extends java.util.Map<any,any> {
				public static class: java.lang.Class<com.amazonaws.util.ImmutableMapParameter<any,any>>;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any, param8: any, param9: any): com.amazonaws.util.ImmutableMapParameter<any,any>;
				public values(): java.util.Collection<any>;
				public get(param0: any): any;
				public static builder(): com.amazonaws.util.ImmutableMapParameter.Builder<any,any>;
				public putAll(param0: java.util.Map<any,any>): void;
				public entrySet(): java.util.Set<java.util.Map.Entry<any,any>>;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any): com.amazonaws.util.ImmutableMapParameter<any,any>;
				public containsKey(param0: any): boolean;
				public keySet(): java.util.Set<any>;
				public size(): number;
				public static of(param0: any, param1: any, param2: any, param3: any): com.amazonaws.util.ImmutableMapParameter<any,any>;
				public put(param0: any, param1: any): any;
				public remove(param0: any): any;
				public clear(): void;
				public isEmpty(): boolean;
				public static of(param0: any, param1: any): com.amazonaws.util.ImmutableMapParameter<any,any>;
				public static of(param0: any, param1: any, param2: any, param3: any, param4: any, param5: any, param6: any, param7: any): com.amazonaws.util.ImmutableMapParameter<any,any>;
				public containsValue(param0: any): boolean;
			}
			export module ImmutableMapParameter {
				export class Builder<K, V>  extends java.lang.Object {
					public static class: java.lang.Class<com.amazonaws.util.ImmutableMapParameter.Builder<any,any>>;
					public constructor();
					public put(param0: K, param1: V): com.amazonaws.util.ImmutableMapParameter.Builder<K,V>;
					public build(): com.amazonaws.util.ImmutableMapParameter<K,V>;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class LengthCheckInputStream extends com.amazonaws.internal.SdkFilterInputStream {
				public static class: java.lang.Class<com.amazonaws.util.LengthCheckInputStream>;
				public static INCLUDE_SKIPPED_BYTES: boolean;
				public static EXCLUDE_SKIPPED_BYTES: boolean;
				public reset(): void;
				public read(): number;
				public skip(param0: number): number;
				public constructor(param0: java.io.InputStream, param1: number, param2: boolean);
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor(param0: java.io.InputStream);
				public mark(param0: number): void;
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Md5Utils {
				public static class: java.lang.Class<com.amazonaws.util.Md5Utils>;
				public static md5AsBase64(param0: java.io.File): string;
				public static computeMD5Hash(param0: native.Array<number>): native.Array<number>;
				public static md5AsBase64(param0: native.Array<number>): string;
				public static computeMD5Hash(param0: java.io.File): native.Array<number>;
				public static computeMD5Hash(param0: java.io.InputStream): native.Array<number>;
				public static md5AsBase64(param0: java.io.InputStream): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class NamespaceRemovingInputStream extends com.amazonaws.internal.SdkFilterInputStream {
				public static class: java.lang.Class<com.amazonaws.util.NamespaceRemovingInputStream>;
				public read(): number;
				public read(param0: native.Array<number>): number;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
			export module NamespaceRemovingInputStream {
				export class StringPrefixSlicer {
					public static class: java.lang.Class<com.amazonaws.util.NamespaceRemovingInputStream.StringPrefixSlicer>;
					public removePrefix(param0: string): boolean;
					public constructor(param0: string);
					public removeRepeatingPrefix(param0: string): boolean;
					public removePrefixEndingWith(param0: string): boolean;
					public getString(): string;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class ResponseMetadataCache {
				public static class: java.lang.Class<com.amazonaws.util.ResponseMetadataCache>;
				public get(param0: any): com.amazonaws.ResponseMetadata;
				public constructor(param0: number);
				public add(param0: any, param1: com.amazonaws.ResponseMetadata): void;
			}
			export module ResponseMetadataCache {
				export class InternalCache extends java.util.LinkedHashMap<java.lang.Integer,com.amazonaws.ResponseMetadata> {
					public static class: java.lang.Class<com.amazonaws.util.ResponseMetadataCache.InternalCache>;
					public removeEldestEntry(param0: java.util.Map.Entry): boolean;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class RuntimeHttpUtils {
				public static class: java.lang.Class<com.amazonaws.util.RuntimeHttpUtils>;
				public static toUri(param0: string, param1: com.amazonaws.Protocol): java.net.URI;
				public static toUri(param0: string, param1: com.amazonaws.ClientConfiguration): java.net.URI;
				public static convertRequestToUrl(param0: com.amazonaws.Request<any>, param1: boolean, param2: boolean): java.net.URL;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class ServiceClientHolderInputStream extends com.amazonaws.internal.SdkFilterInputStream {
				public static class: java.lang.Class<com.amazonaws.util.ServiceClientHolderInputStream>;
				public constructor(param0: java.io.InputStream, param1: com.amazonaws.AmazonWebServiceClient);
				public constructor(param0: java.io.InputStream);
				/** @deprecated */
				public isMetricActivated(): boolean;
				public isMetricActivated(): boolean;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class StringInputStream {
				public static class: java.lang.Class<com.amazonaws.util.StringInputStream>;
				public getString(): string;
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class StringUtils {
				public static class: java.lang.Class<com.amazonaws.util.StringUtils>;
				public static UTF8: java.nio.charset.Charset;
				public static toBigInteger(param0: string): java.math.BigInteger;
				public static fromDate(param0: java.util.Date): string;
				public static fromBigInteger(param0: java.math.BigInteger): string;
				public static toBigDecimal(param0: string): java.math.BigDecimal;
				public static fromBigDecimal(param0: java.math.BigDecimal): string;
				public static fromByteBuffer(param0: java.nio.ByteBuffer): string;
				public static fromDouble(param0: java.lang.Double): string;
				public static toString(param0: java.lang.StringBuilder): string;
				public static fromInteger(param0: java.lang.Integer): string;
				public static fromByte(param0: java.lang.Byte): string;
				public static toInteger(param0: java.lang.StringBuilder): java.lang.Integer;
				public static replace(param0: string, param1: string, param2: string): string;
				public constructor();
				public static join(param0: string, param1: native.Array<string>): string;
				public static toBoolean(param0: java.lang.StringBuilder): java.lang.Boolean;
				public static fromString(param0: string): string;
				public static lowerCase(param0: string): string;
				public static isBlank(param0: string): boolean;
				public static fromFloat(param0: java.lang.Float): string;
				public static fromBoolean(param0: java.lang.Boolean): string;
				public static upperCase(param0: string): string;
				public static fromLong(param0: java.lang.Long): string;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class Throwables {
				public static class: java.lang.Class<com.amazonaws.util.Throwables>;
				public static valueOf(param0: string): com.amazonaws.util.Throwables;
				public static getRootCause(param0: java.lang.Throwable): java.lang.Throwable;
				public static values(): native.Array<com.amazonaws.util.Throwables>;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class TimingInfo {
				public static class: java.lang.Class<com.amazonaws.util.TimingInfo>;
				public static startTimingFullSupport(): com.amazonaws.util.TimingInfo;
				public getLastSubMeasurement(param0: string): com.amazonaws.util.TimingInfo;
				public getStartEpochTimeMilliIfKnown(): java.lang.Long;
				public static unmodifiableTimingInfo(param0: number, param1: number, param2: java.lang.Long): com.amazonaws.util.TimingInfo;
				public getAllSubMeasurements(param0: string): java.util.List<com.amazonaws.util.TimingInfo>;
				public endTiming(): com.amazonaws.util.TimingInfo;
				public getTimeTakenMillisIfKnown(): java.lang.Double;
				/** @deprecated */
				public getStartTime(): number;
				public setEndTimeNano(param0: number): void;
				public getCounter(param0: string): java.lang.Number;
				/** @deprecated */
				public getStartEpochTimeMilli(): number;
				public static durationMilliOf(param0: number, param1: number): number;
				/** @deprecated */
				public getEndEpochTimeMilli(): number;
				public constructor(param0: java.lang.Long, param1: number, param2: java.lang.Long);
				/** @deprecated */
				public getElapsedTimeMillis(): number;
				/** @deprecated */
				public getTimeTakenMillis(): number;
				public isEndTimeKnown(): boolean;
				public incrementCounter(param0: string): void;
				public static startTimingFullSupport(param0: number): com.amazonaws.util.TimingInfo;
				public getSubMeasurement(param0: string, param1: number): com.amazonaws.util.TimingInfo;
				public isStartEpochTimeMilliKnown(): boolean;
				public getAllCounters(): java.util.Map<string,java.lang.Number>;
				public static startTiming(): com.amazonaws.util.TimingInfo;
				/** @deprecated */
				public getEndTime(): number;
				public getSubMeasurement(param0: string): com.amazonaws.util.TimingInfo;
				public getSubMeasurementsByName(): java.util.Map<string,java.util.List<com.amazonaws.util.TimingInfo>>;
				public toString(): string;
				public setCounter(param0: string, param1: number): void;
				/** @deprecated */
				public setEndTime(param0: number): void;
				public getEndTimeNano(): number;
				public getEndTimeNanoIfKnown(): java.lang.Long;
				public static newTimingInfoFullSupport(param0: number, param1: number): com.amazonaws.util.TimingInfo;
				public getStartTimeNano(): number;
				public addSubMeasurement(param0: string, param1: com.amazonaws.util.TimingInfo): void;
				public static newTimingInfoFullSupport(param0: number, param1: number, param2: number): com.amazonaws.util.TimingInfo;
				public static unmodifiableTimingInfo(param0: number, param1: java.lang.Long): com.amazonaws.util.TimingInfo;
				public getEndEpochTimeMilliIfKnown(): java.lang.Long;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class TimingInfoFullSupport extends com.amazonaws.util.TimingInfo {
				public static class: java.lang.Class<com.amazonaws.util.TimingInfoFullSupport>;
				public getLastSubMeasurement(param0: string): com.amazonaws.util.TimingInfo;
				public incrementCounter(param0: string): void;
				public getSubMeasurement(param0: string, param1: number): com.amazonaws.util.TimingInfo;
				public getCounter(param0: string): java.lang.Number;
				public getAllCounters(): java.util.Map<string,java.lang.Number>;
				public getSubMeasurement(param0: string): com.amazonaws.util.TimingInfo;
				public getSubMeasurementsByName(): java.util.Map<string,java.util.List<com.amazonaws.util.TimingInfo>>;
				public addSubMeasurement(param0: string, param1: com.amazonaws.util.TimingInfo): void;
				public getAllSubMeasurements(param0: string): java.util.List<com.amazonaws.util.TimingInfo>;
				public setCounter(param0: string, param1: number): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class TimingInfoUnmodifiable extends com.amazonaws.util.TimingInfo {
				public static class: java.lang.Class<com.amazonaws.util.TimingInfoUnmodifiable>;
				public endTiming(): com.amazonaws.util.TimingInfo;
				/** @deprecated */
				public setEndTime(param0: number): void;
				public setEndTimeNano(param0: number): void;
				public setEndTime(param0: number): void;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class ValidationUtils {
				public static class: java.lang.Class<com.amazonaws.util.ValidationUtils>;
				public static assertAllAreNull(param0: string, param1: native.Array<any>): void;
				public static assertNotEmpty(param0: java.util.Collection, param1: string): java.util.Collection;
				public static assertParameterNotNull(param0: any, param1: string): void;
				public static assertNotEmpty(param0: native.Array<any>, param1: string): native.Array<any>;
				public static assertNotNull(param0: any, param1: string): any;
				public static assertIsPositive(param0: number, param1: string): number;
				public static assertStringNotEmpty(param0: string, param1: string): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class VersionInfoUtils {
				public static class: java.lang.Class<com.amazonaws.util.VersionInfoUtils>;
				public static getPlatform(): string;
				public static getUserAgent(): string;
				public static getVersion(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class XMLWriter {
				public static class: java.lang.Class<com.amazonaws.util.XMLWriter>;
				public value(param0: string): com.amazonaws.util.XMLWriter;
				public constructor(param0: java.io.Writer, param1: string);
				public value(param0: java.util.Date): com.amazonaws.util.XMLWriter;
				public endElement(): com.amazonaws.util.XMLWriter;
				public value(param0: any): com.amazonaws.util.XMLWriter;
				public constructor(param0: java.io.Writer);
				public startElement(param0: string): com.amazonaws.util.XMLWriter;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class XmlUtils {
				public static class: java.lang.Class<com.amazonaws.util.XmlUtils>;
				public static parse(param0: java.io.InputStream, param1: org.xml.sax.ContentHandler): org.xml.sax.XMLReader;
				public constructor();
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export class XpathUtils {
				public static class: java.lang.Class<com.amazonaws.util.XpathUtils>;
				public static documentFrom(param0: java.net.URL): org.w3c.dom.Document;
				public static asBoolean(param0: string, param1: org.w3c.dom.Node): java.lang.Boolean;
				public static asByteBuffer(param0: string, param1: org.w3c.dom.Node): java.nio.ByteBuffer;
				public static asDate(param0: string, param1: org.w3c.dom.Node): java.util.Date;
				public static isEmpty(param0: org.w3c.dom.Node): boolean;
				public static asString(param0: string, param1: org.w3c.dom.Node): string;
				public static xpath(): javax.xml.xpath.XPath;
				public static asDouble(param0: string, param1: org.w3c.dom.Node): java.lang.Double;
				public static documentFrom(param0: string): org.w3c.dom.Document;
				public constructor();
				public static documentFrom(param0: java.io.InputStream): org.w3c.dom.Document;
				public static asInteger(param0: string, param1: org.w3c.dom.Node): java.lang.Integer;
				public static asByte(param0: string, param1: org.w3c.dom.Node): java.lang.Byte;
				public static nodeLength(param0: org.w3c.dom.NodeList): number;
				public static asLong(param0: string, param1: org.w3c.dom.Node): java.lang.Long;
				public static asNode(param0: string, param1: org.w3c.dom.Node): org.w3c.dom.Node;
				public static asFloat(param0: string, param1: org.w3c.dom.Node): java.lang.Float;
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export module json {
				export class AwsJsonFactory {
					public static class: java.lang.Class<com.amazonaws.util.json.AwsJsonFactory>;
					/**
					 * Constructs a new instance of the com.amazonaws.util.json.AwsJsonFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getJsonReader(param0: java.io.Reader): com.amazonaws.util.json.AwsJsonReader;
						getJsonWriter(param0: java.io.Writer): com.amazonaws.util.json.AwsJsonWriter;
					});
					public constructor();
					public getJsonReader(param0: java.io.Reader): com.amazonaws.util.json.AwsJsonReader;
					public getJsonWriter(param0: java.io.Writer): com.amazonaws.util.json.AwsJsonWriter;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export module json {
				export class AwsJsonReader {
					public static class: java.lang.Class<com.amazonaws.util.json.AwsJsonReader>;
					/**
					 * Constructs a new instance of the com.amazonaws.util.json.AwsJsonReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						beginArray(): void;
						endArray(): void;
						beginObject(): void;
						endObject(): void;
						isContainer(): boolean;
						hasNext(): boolean;
						nextName(): string;
						nextString(): string;
						peek(): com.amazonaws.util.json.AwsJsonToken;
						skipValue(): void;
						close(): void;
					});
					public constructor();
					public beginArray(): void;
					public beginObject(): void;
					public endObject(): void;
					public isContainer(): boolean;
					public close(): void;
					public nextString(): string;
					public endArray(): void;
					public peek(): com.amazonaws.util.json.AwsJsonToken;
					public skipValue(): void;
					public hasNext(): boolean;
					public nextName(): string;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export module json {
				export class AwsJsonToken {
					public static class: java.lang.Class<com.amazonaws.util.json.AwsJsonToken>;
					public static BEGIN_ARRAY: com.amazonaws.util.json.AwsJsonToken;
					public static END_ARRAY: com.amazonaws.util.json.AwsJsonToken;
					public static BEGIN_OBJECT: com.amazonaws.util.json.AwsJsonToken;
					public static END_OBJECT: com.amazonaws.util.json.AwsJsonToken;
					public static FIELD_NAME: com.amazonaws.util.json.AwsJsonToken;
					public static VALUE_BOOLEAN: com.amazonaws.util.json.AwsJsonToken;
					public static VALUE_NULL: com.amazonaws.util.json.AwsJsonToken;
					public static VALUE_NUMBER: com.amazonaws.util.json.AwsJsonToken;
					public static VALUE_STRING: com.amazonaws.util.json.AwsJsonToken;
					public static UNKNOWN: com.amazonaws.util.json.AwsJsonToken;
					public static values(): native.Array<com.amazonaws.util.json.AwsJsonToken>;
					public static valueOf(param0: string): com.amazonaws.util.json.AwsJsonToken;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export module json {
				export class AwsJsonWriter {
					public static class: java.lang.Class<com.amazonaws.util.json.AwsJsonWriter>;
					/**
					 * Constructs a new instance of the com.amazonaws.util.json.AwsJsonWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						beginArray(): com.amazonaws.util.json.AwsJsonWriter;
						endArray(): com.amazonaws.util.json.AwsJsonWriter;
						beginObject(): com.amazonaws.util.json.AwsJsonWriter;
						endObject(): com.amazonaws.util.json.AwsJsonWriter;
						name(param0: string): com.amazonaws.util.json.AwsJsonWriter;
						value(param0: string): com.amazonaws.util.json.AwsJsonWriter;
						value(param0: boolean): com.amazonaws.util.json.AwsJsonWriter;
						value(param0: number): com.amazonaws.util.json.AwsJsonWriter;
						value(param0: number): com.amazonaws.util.json.AwsJsonWriter;
						value(param0: java.lang.Number): com.amazonaws.util.json.AwsJsonWriter;
						value(param0: java.util.Date): com.amazonaws.util.json.AwsJsonWriter;
						value(param0: java.nio.ByteBuffer): com.amazonaws.util.json.AwsJsonWriter;
						value(): com.amazonaws.util.json.AwsJsonWriter;
						flush(): void;
						close(): void;
					});
					public constructor();
					public endArray(): com.amazonaws.util.json.AwsJsonWriter;
					public name(param0: string): com.amazonaws.util.json.AwsJsonWriter;
					public value(param0: java.util.Date): com.amazonaws.util.json.AwsJsonWriter;
					public beginArray(): com.amazonaws.util.json.AwsJsonWriter;
					public value(): com.amazonaws.util.json.AwsJsonWriter;
					public flush(): void;
					public value(param0: string): com.amazonaws.util.json.AwsJsonWriter;
					public value(param0: number): com.amazonaws.util.json.AwsJsonWriter;
					public beginObject(): com.amazonaws.util.json.AwsJsonWriter;
					public close(): void;
					public endObject(): com.amazonaws.util.json.AwsJsonWriter;
					public value(param0: java.lang.Number): com.amazonaws.util.json.AwsJsonWriter;
					public value(param0: java.nio.ByteBuffer): com.amazonaws.util.json.AwsJsonWriter;
					public value(param0: boolean): com.amazonaws.util.json.AwsJsonWriter;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export module json {
				export class DateDeserializer extends java.lang.Object {
					public static class: java.lang.Class<com.amazonaws.util.json.DateDeserializer>;
					public serialize(param0: java.util.Date, param1: java.lang.reflect.Type, param2: com.google.gson.JsonSerializationContext): com.google.gson.JsonElement;
					public constructor(param0: native.Array<string>);
					public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): java.util.Date;
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export module json {
				export class GsonFactory extends com.amazonaws.util.json.AwsJsonFactory {
					public static class: java.lang.Class<com.amazonaws.util.json.GsonFactory>;
					public getJsonReader(param0: java.io.Reader): com.amazonaws.util.json.AwsJsonReader;
					public getJsonWriter(param0: java.io.Writer): com.amazonaws.util.json.AwsJsonWriter;
				}
				export module GsonFactory {
					export class GsonReader extends com.amazonaws.util.json.AwsJsonReader {
						public static class: java.lang.Class<com.amazonaws.util.json.GsonFactory.GsonReader>;
						public beginObject(): void;
						public nextName(): string;
						public skipValue(): void;
						public close(): void;
						public constructor(param0: java.io.Reader);
						public isContainer(): boolean;
						public hasNext(): boolean;
						public peek(): com.amazonaws.util.json.AwsJsonToken;
						public endArray(): void;
						public beginArray(): void;
						public endObject(): void;
						public nextString(): string;
					}
					export class GsonWriter extends com.amazonaws.util.json.AwsJsonWriter {
						public static class: java.lang.Class<com.amazonaws.util.json.GsonFactory.GsonWriter>;
						public name(param0: string): com.amazonaws.util.json.AwsJsonWriter;
						public value(param0: java.nio.ByteBuffer): com.amazonaws.util.json.AwsJsonWriter;
						public endArray(): com.amazonaws.util.json.AwsJsonWriter;
						public close(): void;
						public value(param0: java.util.Date): com.amazonaws.util.json.AwsJsonWriter;
						public constructor(param0: java.io.Writer);
						public value(param0: java.lang.Number): com.amazonaws.util.json.AwsJsonWriter;
						public flush(): void;
						public value(): com.amazonaws.util.json.AwsJsonWriter;
						public value(param0: string): com.amazonaws.util.json.AwsJsonWriter;
						public value(param0: number): com.amazonaws.util.json.AwsJsonWriter;
						public value(param0: boolean): com.amazonaws.util.json.AwsJsonWriter;
						public beginArray(): com.amazonaws.util.json.AwsJsonWriter;
						public beginObject(): com.amazonaws.util.json.AwsJsonWriter;
						public endObject(): com.amazonaws.util.json.AwsJsonWriter;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export module json {
				export class JacksonFactory extends com.amazonaws.util.json.AwsJsonFactory {
					public static class: java.lang.Class<com.amazonaws.util.json.JacksonFactory>;
					public getJsonReader(param0: java.io.Reader): com.amazonaws.util.json.AwsJsonReader;
					public getJsonWriter(param0: java.io.Writer): com.amazonaws.util.json.AwsJsonWriter;
				}
				export module JacksonFactory {
					export class JacksonReader extends com.amazonaws.util.json.AwsJsonReader {
						public static class: java.lang.Class<com.amazonaws.util.json.JacksonFactory.JacksonReader>;
						public constructor(param0: com.fasterxml.jackson.core.JsonFactory, param1: java.io.Reader);
						public beginObject(): void;
						public nextName(): string;
						public skipValue(): void;
						public close(): void;
						public isContainer(): boolean;
						public hasNext(): boolean;
						public peek(): com.amazonaws.util.json.AwsJsonToken;
						public endArray(): void;
						public beginArray(): void;
						public endObject(): void;
						public nextString(): string;
					}
					export class JacksonWriter extends com.amazonaws.util.json.AwsJsonWriter {
						public static class: java.lang.Class<com.amazonaws.util.json.JacksonFactory.JacksonWriter>;
						public name(param0: string): com.amazonaws.util.json.AwsJsonWriter;
						public value(param0: java.nio.ByteBuffer): com.amazonaws.util.json.AwsJsonWriter;
						public endArray(): com.amazonaws.util.json.AwsJsonWriter;
						public close(): void;
						public value(param0: java.util.Date): com.amazonaws.util.json.AwsJsonWriter;
						public value(param0: java.lang.Number): com.amazonaws.util.json.AwsJsonWriter;
						public flush(): void;
						public value(): com.amazonaws.util.json.AwsJsonWriter;
						public value(param0: string): com.amazonaws.util.json.AwsJsonWriter;
						public constructor(param0: com.fasterxml.jackson.core.JsonFactory, param1: java.io.Writer);
						public value(param0: number): com.amazonaws.util.json.AwsJsonWriter;
						public value(param0: boolean): com.amazonaws.util.json.AwsJsonWriter;
						public beginArray(): com.amazonaws.util.json.AwsJsonWriter;
						public beginObject(): com.amazonaws.util.json.AwsJsonWriter;
						public endObject(): com.amazonaws.util.json.AwsJsonWriter;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module util {
			export module json {
				export class JsonUtils {
					public static class: java.lang.Class<com.amazonaws.util.json.JsonUtils>;
					public static getJsonWriter(param0: java.io.Writer): com.amazonaws.util.json.AwsJsonWriter;
					public constructor();
					public static jsonToMap(param0: java.io.Reader): java.util.Map<string,string>;
					public static getJsonReader(param0: java.io.Reader): com.amazonaws.util.json.AwsJsonReader;
					public static mapToString(param0: java.util.Map<string,string>): string;
					public static setJsonEngine(param0: com.amazonaws.util.json.JsonUtils.JsonEngine): void;
					public static jsonToMap(param0: string): java.util.Map<string,string>;
				}
				export module JsonUtils {
					export class JsonEngine {
						public static class: java.lang.Class<com.amazonaws.util.json.JsonUtils.JsonEngine>;
						public static Gson: com.amazonaws.util.json.JsonUtils.JsonEngine;
						public static Jackson: com.amazonaws.util.json.JsonUtils.JsonEngine;
						public static valueOf(param0: string): com.amazonaws.util.json.JsonUtils.JsonEngine;
						public static values(): native.Array<com.amazonaws.util.json.JsonUtils.JsonEngine>;
					}
				}
			}
		}
	}
}

//Generics information:
//com.amazonaws.AmazonWebServiceResponse:1
//com.amazonaws.DefaultRequest:1
//com.amazonaws.Request:1
//com.amazonaws.Response:1
//com.amazonaws.async.Callback:1
//com.amazonaws.handlers.AsyncHandler:2
//com.amazonaws.http.HttpResponseHandler:1
//com.amazonaws.http.JsonResponseHandler:1
//com.amazonaws.http.StaxResponseHandler:1
//com.amazonaws.internal.ListWithAutoConstructFlag:1
//com.amazonaws.internal.ReturningRunnable:1
//com.amazonaws.transform.AbstractErrorUnmarshaller:1
//com.amazonaws.transform.ListUnmarshaller:1
//com.amazonaws.transform.MapEntry:2
//com.amazonaws.transform.MapUnmarshaller:1
//com.amazonaws.transform.Marshaller:2
//com.amazonaws.transform.Unmarshaller:2
//com.amazonaws.transform.VoidJsonUnmarshaller:1
//com.amazonaws.transform.VoidStaxUnmarshaller:1
//com.amazonaws.util.ImmutableMapParameter:2
//com.amazonaws.util.ImmutableMapParameter.Builder:2