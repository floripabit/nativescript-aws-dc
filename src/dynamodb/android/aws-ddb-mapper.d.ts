declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class ArgumentMarshaller {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						});
						public constructor();
						public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
					}
					export module ArgumentMarshaller {
						export class BinaryAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.BinaryAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$BinaryAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
						export class BinarySetAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.BinarySetAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$BinarySetAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
						export class BooleanAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.BooleanAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$BooleanAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
						export class ListAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.ListAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$ListAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
						export class MapAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.MapAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$MapAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
						export class NumberAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.NumberAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$NumberAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
						export class NumberSetAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.NumberSetAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$NumberSetAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
						export class StringAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$StringAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
						export class StringSetAttributeMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringSetAttributeMarshaller>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller$StringSetAttributeMarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							});
							public constructor();
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class ArgumentUnmarshaller {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
						});
						public constructor();
						public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
						public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class AttributeTransformer {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							transform(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any>): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
							untransform(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any>): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						});
						public constructor();
						public untransform(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any>): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public transform(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any>): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
					}
					export module AttributeTransformer {
						export class Parameters<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any>>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer$Parameters interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
								isPartialUpdate(): boolean;
								getModelClass(): java.lang.Class<T>;
								getMapperConfig(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig;
								getTableName(): string;
								getHashKeyName(): string;
								getRangeKeyName(): string;
							});
							public constructor();
							public getModelClass(): java.lang.Class<T>;
							public getTableName(): string;
							public isPartialUpdate(): boolean;
							public getHashKeyName(): string;
							public getAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
							public getMapperConfig(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig;
							public getRangeKeyName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class AttributeTransformerChain extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformerChain>;
						public untransform(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any>): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public constructor(param0: native.Array<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer>);
						public toString(): string;
						public constructor(param0: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer>);
						public getTransformers(): java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer>;
						public transform(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any>): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
					}
					export module AttributeTransformerChain {
						export class ProxyParameters<T>  extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any> {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformerChain.ProxyParameters<any>>;
							public setAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
							public getTableName(): string;
							public getModelClass(): java.lang.Class<any>;
							public isPartialUpdate(): boolean;
							public getHashKeyName(): string;
							public getAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any>);
							public getMapperConfig(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig;
							public getRangeKeyName(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class ConversionSchema {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getConverter(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema.Dependencies): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter;
						});
						public constructor();
						public getConverter(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema.Dependencies): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter;
					}
					export module ConversionSchema {
						export class Dependencies {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema.Dependencies>;
							public constructor();
							public get(param0: java.lang.Class): any;
							public with(param0: java.lang.Class, param1: any): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema.Dependencies;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class ConversionSchemas {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas>;
						public static V1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema;
						public static V2_COMPATIBLE: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema;
						public static V2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema;
					}
					export module ConversionSchemas {
						export class AbstractMarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.MarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.AbstractMarshallerSet>;
							public getMemberMarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public getMarshaller(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public constructor(param0: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>>, param1: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>>);
						}
						export class AnnotationAwareMarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.MarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.AnnotationAwareMarshallerSet>;
							public getMemberMarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public getMarshaller(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.MarshallerSet);
						}
						export class AnnotationAwareUnmarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.UnmarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.AnnotationAwareUnmarshallerSet>;
							public getMemberUnmarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
							public getUnmarshaller(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.UnmarshallerSet);
						}
						export class CachingMarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.MarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.CachingMarshallerSet>;
							public getMemberMarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public getMarshaller(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.MarshallerSet);
						}
						export class CachingUnmarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.UnmarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.CachingUnmarshallerSet>;
							public getMemberUnmarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
							public getUnmarshaller(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.UnmarshallerSet);
						}
						export class MarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.MarshallerSet>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas$MarshallerSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMarshaller(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
								getMemberMarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							});
							public constructor();
							public getMemberMarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public getMarshaller(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
						}
						export class Pair<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<any>>;
							public key: java.lang.Class<any>;
							public value: T;
							public static of(param0: java.lang.Class<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller>;
							public static of(param0: java.lang.Class<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>;
						}
						export class StandardConversionSchema extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.StandardConversionSchema>;
							public getConverter(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema.Dependencies): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter;
							public constructor(param0: string, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.MarshallerSet, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.UnmarshallerSet);
							public toString(): string;
						}
						export class StandardItemConverter extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.StandardItemConverter>;
							public unconvert(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method, param2: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public convert(param0: any): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
							public getFieldModel(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.MarshallerSet, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.UnmarshallerSet, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBReflector, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3ClientCache);
							public convert(param0: java.lang.reflect.Method, param1: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							public unconvert(param0: java.lang.Class, param1: java.util.Map): any;
						}
						export class StandardUnmarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.UnmarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.StandardUnmarshallerSet>;
							public constructor();
							public getMemberUnmarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
							public constructor(param0: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller>>, param1: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller>>);
							public getUnmarshaller(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
						}
						export class UnmarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.UnmarshallerSet>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas$UnmarshallerSet interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getUnmarshaller(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
								getMemberUnmarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
							});
							public constructor();
							public getMemberUnmarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
							public getUnmarshaller(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller;
						}
						export class V1MarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.AbstractMarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.V1MarshallerSet>;
							public constructor();
							public getMemberMarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public getMarshaller(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public constructor(param0: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>>, param1: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>>);
						}
						export class V2CompatibleMarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.AbstractMarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.V2CompatibleMarshallerSet>;
							public constructor();
							public getMemberMarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public getMarshaller(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public constructor(param0: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>>, param1: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>>);
						}
						export class V2MarshallerSet extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.AbstractMarshallerSet {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.V2MarshallerSet>;
							public constructor();
							public getMemberMarshaller(param0: java.lang.reflect.Type): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public getMarshaller(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public constructor(param0: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>>, param1: java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller>>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBAttribute {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBAttribute>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBAttribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							attributeName(): string;
						});
						public constructor();
						public attributeName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBAutoGeneratedKey {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBAutoGeneratedKey>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBAutoGeneratedKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBDeleteExpression {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression>;
						public addExpressionAttributeValuesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public setConditionalOperator(param0: string): void;
						public constructor();
						public withExpectedEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public withConditionExpression(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public getExpected(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>;
						public getExpressionAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public setExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): void;
						public withExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public getConditionExpression(): string;
						public withExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public withConditionalOperator(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public setConditionExpression(param0: string): void;
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public getConditionalOperator(): string;
						public setExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
						public clearExpressionAttributeValuesEntries(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBDocument {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDocument>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDocument interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBHashKey {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBHashKey>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBHashKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							attributeName(): string;
						});
						public constructor();
						public attributeName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBIgnore {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBIgnore>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBIgnore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBIndexHashKey {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBIndexHashKey>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBIndexHashKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							attributeName(): string;
							globalSecondaryIndexName(): string;
							globalSecondaryIndexNames(): native.Array<string>;
						});
						public constructor();
						public attributeName(): string;
						public globalSecondaryIndexName(): string;
						public globalSecondaryIndexNames(): native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBIndexRangeKey {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBIndexRangeKey>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBIndexRangeKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							attributeName(): string;
							localSecondaryIndexName(): string;
							localSecondaryIndexNames(): native.Array<string>;
							globalSecondaryIndexName(): string;
							globalSecondaryIndexNames(): native.Array<string>;
						});
						public constructor();
						public attributeName(): string;
						public localSecondaryIndexName(): string;
						public globalSecondaryIndexName(): string;
						public globalSecondaryIndexNames(): native.Array<string>;
						public localSecondaryIndexNames(): native.Array<string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBMapper {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper>;
						public marshallIntoObject(param0: java.lang.Class, param1: java.util.Map): any;
						public delete(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): void;
						public query(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<any>, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedQueryList<any>;
						public marshallIntoObjects(param0: java.lang.Class, param1: java.util.List): java.util.List;
						public batchSave(param0: native.Array<any>): java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.FailedBatch>;
						public generateCreateTableRequest(param0: java.lang.Class<any>): com.amazonaws.services.dynamodbv2.model.CreateTableRequest;
						public batchWrite(param0: java.util.List<any>, param1: java.util.List<any>): java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.FailedBatch>;
						public load(param0: java.lang.Class, param1: any, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): any;
						public batchLoad(param0: java.util.Map<java.lang.Class<any>,java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.KeyPair>>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): java.util.Map<string,java.util.List<any>>;
						public save(param0: any): void;
						public batchLoad(param0: java.util.List<any>): java.util.Map<string,java.util.List<any>>;
						public count(param0: java.lang.Class<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression): number;
						public save(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): void;
						public getS3ClientCache(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3ClientCache;
						public load(param0: java.lang.Class, param1: any, param2: any, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): any;
						public delete(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): void;
						/** @deprecated */
						public constructor(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param1: com.amazonaws.auth.AWSCredentialsProvider);
						public getTableName(param0: java.lang.Class<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): string;
						public static builder(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.Builder;
						public createS3Link(param0: string, param1: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3Link;
						public batchWrite(param0: java.util.List<any>, param1: java.util.List<any>, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.FailedBatch>;
						public count(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<any>): number;
						public batchSave(param0: java.util.List<any>): java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.FailedBatch>;
						public count(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<any>, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): number;
						public save(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBSaveExpression): void;
						public query(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<any>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedQueryList<any>;
						public count(param0: java.lang.Class<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): number;
						public scanPage(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ScanResultPage<any>;
						public createS3Link(param0: com.amazonaws.services.s3.model.Region, param1: string, param2: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3Link;
						public parallelScan(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression, param2: number): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedParallelScanList<any>;
						public scan(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedScanList<any>;
						public save(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBSaveExpression, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): void;
						public batchLoad(param0: java.util.List<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): java.util.Map<string,java.util.List<any>>;
						/** @deprecated */
						public constructor(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB);
						public delete(param0: any): void;
						public load(param0: java.lang.Class, param1: any, param2: any): any;
						public queryPage(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<any>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.QueryResultPage<any>;
						public load(param0: java.lang.Class, param1: any): any;
						public getTableName(param0: java.lang.Class<any>, param1: any, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): string;
						public delete(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBDeleteExpression): void;
						/** @deprecated */
						public constructor(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer);
						/** @deprecated */
						public constructor(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig, param2: com.amazonaws.auth.AWSCredentialsProvider);
						public scanPage(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ScanResultPage<any>;
						/** @deprecated */
						public constructor(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig);
						public batchDelete(param0: native.Array<any>): java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.FailedBatch>;
						public load(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): any;
						public parallelScan(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression, param2: number, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedParallelScanList<any>;
						public scan(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedScanList<any>;
						/** @deprecated */
						public constructor(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer, param3: com.amazonaws.auth.AWSCredentialsProvider);
						public batchDelete(param0: java.util.List<any>): java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.FailedBatch>;
						public queryPage(param0: java.lang.Class, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<any>, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.QueryResultPage<any>;
						public load(param0: any): any;
						public batchLoad(param0: java.util.Map<java.lang.Class<any>,java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.KeyPair>>): java.util.Map<string,java.util.List<any>>;
					}
					export module DynamoDBMapper {
						export class Builder {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.Builder>;
							public constructor();
							public awsConfiguration(param0: com.amazonaws.mobile.config.AWSConfiguration): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.Builder;
							public awsCredentialsProviderForS3(param0: com.amazonaws.auth.AWSCredentialsProvider): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.Builder;
							public build(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper;
							public attributeTransformer(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.Builder;
							public dynamoDBMapperConfig(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.Builder;
							public dynamoDBClient(param0: com.amazonaws.services.dynamodbv2.AmazonDynamoDB): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.Builder;
						}
						export class FailedBatch {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.FailedBatch>;
							public constructor();
							public setException(param0: java.lang.Exception): void;
							public getUnprocessedItems(): java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>;
							public setUnprocessedItems(param0: java.util.Map<string,java.util.List<com.amazonaws.services.dynamodbv2.model.WriteRequest>>): void;
							public getException(): java.lang.Exception;
						}
						export abstract class SaveObjectHandler {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.SaveObjectHandler>;
							public object: any;
							public clazz: java.lang.Class<any>;
							public userProvidedExpectedValueConditions: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>;
							public userProvidedConditionOperator: string;
							public execute(): void;
							public getLocalSaveBehavior(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior;
							public getTableName(): string;
							public onNullNonKeyAttribute(param0: string): void;
							public executeLowLevelRequest(): void;
							public getKeyAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
							public doUpdateItem(): com.amazonaws.services.dynamodbv2.model.UpdateItemResult;
							public mergeExpectedAttributeValueConditions(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>;
							public onKeyAttributeValue(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): void;
							public onNonKeyAttribute(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): void;
							public getInMemoryUpdates(): java.util.List<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.ValueUpdate>;
							public doPutItem(): com.amazonaws.services.dynamodbv2.model.PutItemResult;
							public constructor(param0: java.lang.Class<any>, param1: any, param2: string, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig, param4: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter, param5: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBSaveExpression);
							public getAttributeValueUpdates(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValueUpdate>;
						}
						export class TransformerParameters<T>  extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters<any> {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.TransformerParameters<any>>;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBReflector, param1: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>, param2: boolean, param3: java.lang.Class<any>, param4: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig, param5: string);
							public getTableName(): string;
							public getModelClass(): java.lang.Class<any>;
							public isPartialUpdate(): boolean;
							public getHashKeyName(): string;
							public getAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
							public getMapperConfig(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig;
							public getRangeKeyName(): string;
						}
						export class ValueUpdate {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.ValueUpdate>;
							public apply(): void;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.reflect.Method, param2: com.amazonaws.services.dynamodbv2.model.AttributeValue, param3: any, param4: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBMapperConfig {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig>;
						public static DEFAULT: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig;
						public getConsistentReads(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads;
						/** @deprecated */
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ObjectTableNameResolver);
						public getRequestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
						public getPaginationLoadingStrategy(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameResolver, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ObjectTableNameResolver);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy);
						public getConversionSchema(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema);
						/** @deprecated */
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy, param4: com.amazonaws.metrics.RequestMetricCollector);
						public getTableNameResolver(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameResolver;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameResolver);
						public getSaveBehavior(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior;
						public getTableNameOverride(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride;
						public getObjectTableNameResolver(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ObjectTableNameResolver;
						/** @deprecated */
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior);
					}
					export module DynamoDBMapperConfig {
						export class Builder {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder>;
							public getConsistentReads(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads;
							public getTableNameResolver(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameResolver;
							public getSaveBehavior(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior;
							public withTableNameOverride(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder;
							public setConsistentReads(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads): void;
							public build(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig;
							public getPaginationLoadingStrategy(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy;
							public withRequestMetricCollector(param0: com.amazonaws.metrics.RequestMetricCollector): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder;
							public getTableNameOverride(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride;
							public withConsistentReads(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder;
							public withObjectTableNameResolver(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ObjectTableNameResolver): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder;
							public getConversionSchema(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema;
							public setSaveBehavior(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior): void;
							public setRequestMetricCollector(param0: com.amazonaws.metrics.RequestMetricCollector): void;
							public constructor();
							public setTableNameOverride(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride): void;
							public withSaveBehavior(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder;
							public setTableNameResolver(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameResolver): void;
							public setPaginationLoadingStrategy(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy): void;
							public getObjectTableNameResolver(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ObjectTableNameResolver;
							public withConversionSchema(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder;
							public setConversionSchema(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchema): void;
							public setObjectTableNameResolver(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ObjectTableNameResolver): void;
							public withPaginationLoadingStrategy(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder;
							public getRequestMetricCollector(): com.amazonaws.metrics.RequestMetricCollector;
							public withTableNameResolver(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameResolver): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.Builder;
						}
						export class ConsistentReads {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads>;
							public static CONSISTENT: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads;
							public static EVENTUAL: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads;
							public static values(): native.Array<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads>;
							public static valueOf(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ConsistentReads;
						}
						export class DefaultTableNameResolver extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameResolver {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.DefaultTableNameResolver>;
							public static INSTANCE: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.DefaultTableNameResolver;
							public constructor();
							public getTableName(param0: java.lang.Class<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): string;
						}
						export class ObjectTableNameResolver {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.ObjectTableNameResolver>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig$ObjectTableNameResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTableName(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): string;
							});
							public constructor();
							public getTableName(param0: any, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): string;
						}
						export class PaginationLoadingStrategy {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy>;
							public static LAZY_LOADING: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy;
							public static ITERATION_ONLY: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy;
							public static EAGER_LOADING: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy;
							public static valueOf(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy;
							public static values(): native.Array<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy>;
						}
						export class SaveBehavior {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior>;
							public static UPDATE: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior;
							public static UPDATE_SKIP_NULL_ATTRIBUTES: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior;
							public static CLOBBER: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior;
							public static APPEND_SET: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior;
							public static values(): native.Array<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior>;
							public static valueOf(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.SaveBehavior;
						}
						export class TableNameOverride {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride>;
							public static withTableNamePrefix(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride;
							public constructor(param0: string);
							public static withTableNameReplacement(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameOverride;
							public getTableNamePrefix(): string;
							public getTableName(): string;
						}
						export class TableNameResolver {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.TableNameResolver>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig$TableNameResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTableName(param0: java.lang.Class<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): string;
							});
							public constructor();
							public getTableName(param0: java.lang.Class<any>, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBMapperFieldModel {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel>;
						public constructor(param0: string, param1: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType, param2: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller);
						public getDynamoDBAttributeName(): string;
						public getDynamoDBAttributeType(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
					}
					export module DynamoDBMapperFieldModel {
						export class DynamoDBAttributeType {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType>;
							public static S: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static N: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static B: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static SS: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static NS: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static BS: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static BOOL: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static NULL: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static L: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static M: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static valueOf(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType;
							public static values(): native.Array<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel.DynamoDBAttributeType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBMappingException {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMappingException>;
						public constructor();
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
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBMarshaller<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMarshaller<any>>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMarshaller<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							marshall(param0: T): string;
							unmarshall(param0: java.lang.Class<T>, param1: string): T;
						});
						public constructor();
						public marshall(param0: T): string;
						public unmarshall(param0: java.lang.Class<T>, param1: string): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBMarshalling {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMarshalling>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMarshalling interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							marshallerClass(): java.lang.Class<any>;
						});
						public constructor();
						public marshallerClass(): java.lang.Class<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBNativeBoolean {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBNativeBoolean>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBNativeBoolean interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBQueryExpression<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<any>>;
						public withQueryFilter(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public getExpressionAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public getHashKeyValues(): T;
						public setQueryFilter(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): void;
						public setScanIndexForward(param0: boolean): void;
						public getLimit(): java.lang.Integer;
						public withConsistentRead(param0: boolean): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public withHashKeyValues(param0: T): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public addExpressionAttributeValuesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public setConsistentRead(param0: boolean): void;
						public setLimit(param0: java.lang.Integer): void;
						public setExclusiveStartKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getConditionalOperator(): string;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public getRangeKeyConditions(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>;
						public isConsistentRead(): boolean;
						public withExclusiveStartKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public setConditionalOperator(param0: string): void;
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public constructor();
						public getExclusiveStartKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public withRangeKeyConditions(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public withScanIndexForward(param0: boolean): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public withRangeKeyCondition(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Condition): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public getQueryFilter(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>;
						public setHashKeyValues(param0: T): void;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public setIndexName(param0: string): void;
						public withFilterExpression(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public withQueryFilterEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Condition): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public withExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public isScanIndexForward(): boolean;
						public withConditionalOperator(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public setExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public setRangeKeyConditions(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): void;
						public getFilterExpression(): string;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public clearExpressionAttributeValuesEntries(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public getIndexName(): string;
						public setFilterExpression(param0: string): void;
						public withIndexName(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
						public withLimit(param0: java.lang.Integer): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression<T>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBRangeKey {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBRangeKey>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBRangeKey interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							attributeName(): string;
						});
						public constructor();
						public attributeName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBReflector {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBReflector>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBSaveExpression {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBSaveExpression>;
						public setConditionalOperator(param0: string): void;
						public constructor();
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public getExpected(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>;
						public withConditionalOperator(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBSaveExpression;
						public withExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBSaveExpression;
						public setExpected(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue>): void;
						public withExpectedEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.ExpectedAttributeValue): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBSaveExpression;
						public getConditionalOperator(): string;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBSaveExpression;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBScanExpression {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression>;
						public setScanFilter(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): void;
						public withFilterExpression(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public withConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public getExpressionAttributeValues(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public addExpressionAttributeNamesEntry(param0: string, param1: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public withTotalSegments(param0: java.lang.Integer): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public withLimit(param0: java.lang.Integer): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public clearExpressionAttributeValuesEntries(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public getLimit(): java.lang.Integer;
						public withSegment(param0: java.lang.Integer): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public clearExpressionAttributeNamesEntries(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public withExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public setLimit(param0: java.lang.Integer): void;
						public setExclusiveStartKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getConditionalOperator(): string;
						public withScanFilter(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public withFilterConditionEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Condition): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public withConditionalOperator(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public addExpressionAttributeValuesEntry(param0: string, param1: com.amazonaws.services.dynamodbv2.model.AttributeValue): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public setConditionalOperator(param0: string): void;
						public constructor();
						public getExclusiveStartKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public addFilterCondition(param0: string, param1: com.amazonaws.services.dynamodbv2.model.Condition): void;
						public setSegment(param0: java.lang.Integer): void;
						public withExclusiveStartKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public getTotalSegments(): java.lang.Integer;
						public setConditionalOperator(param0: com.amazonaws.services.dynamodbv2.model.ConditionalOperator): void;
						public getExpressionAttributeNames(): java.util.Map<string,string>;
						public getScanFilter(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.Condition>;
						public getSegment(): java.lang.Integer;
						public withExpressionAttributeNames(param0: java.util.Map<string,string>): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBScanExpression;
						public setExpressionAttributeValues(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getFilterExpression(): string;
						public setExpressionAttributeNames(param0: java.util.Map<string,string>): void;
						public setTotalSegments(param0: java.lang.Integer): void;
						public setFilterExpression(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBTable {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBTable>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBTable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							tableName(): string;
						});
						public constructor();
						public tableName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBTableSchemaParser {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBTableSchemaParser>;
					}
					export module DynamoDBTableSchemaParser {
						export class TableIndexesInfo {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBTableSchemaParser.TableIndexesInfo>;
							public getAllGsiNames(): java.util.Set<string>;
							public getGsiNamesByIndexRangeKey(param0: string): java.util.Set<string>;
							public getLsiNamesByIndexRangeKey(param0: string): java.util.Set<string>;
							public getGsiNamesByIndexHashKey(param0: string): java.util.Set<string>;
							public getAllLsiNames(): java.util.Set<string>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class DynamoDBVersionAttribute {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBVersionAttribute>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBVersionAttribute interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							attributeName(): string;
						});
						public constructor();
						public attributeName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class ItemConverter {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter>;
						/**
						 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getFieldModel(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel;
							convert(param0: java.lang.reflect.Method, param1: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							convert(param0: any): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
							unconvert(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method, param2: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							unconvert(param0: java.lang.Class, param1: java.util.Map): any;
						});
						public constructor();
						public getFieldModel(param0: java.lang.reflect.Method): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperFieldModel;
						public convert(param0: java.lang.reflect.Method, param1: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						public unconvert(param0: java.lang.Class, param1: java.util.Map): any;
						public convert(param0: any): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public unconvert(param0: java.lang.reflect.Method, param1: java.lang.reflect.Method, param2: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class JsonMarshaller<T>  extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMarshaller<any> {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.JsonMarshaller<any>>;
						public constructor();
						public marshall(param0: any): string;
						public unmarshall(param0: java.lang.Class<any>, param1: string): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class KeyPair {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.KeyPair>;
						public setHashKey(param0: any): void;
						public withRangeKey(param0: any): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.KeyPair;
						public constructor();
						public setRangeKey(param0: any): void;
						public getRangeKey(): any;
						public withHashKey(param0: any): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.KeyPair;
						public getHashKey(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export abstract class PaginatedList<T>  extends java.util.List<any> {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedList<any>>;
						public mapper: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper;
						public clazz: java.lang.Class<any>;
						public dynamo: com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
						public allResultsLoaded: boolean;
						public allResults: java.util.List<any>;
						public nextResults: java.util.List<any>;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy);
						public listIterator(): java.util.ListIterator<any>;
						public iterator(): java.util.Iterator<any>;
						public add(param0: any): boolean;
						public listIterator(param0: number): java.util.ListIterator<any>;
						public toArray(param0: native.Array<any>): native.Array<any>;
						public retainAll(param0: java.util.Collection<any>): boolean;
						public addAll(param0: java.util.Collection<any>): boolean;
						public set(param0: number, param1: any): any;
						public loadAllResults(): void;
						public isEmpty(): boolean;
						public get(param0: number): any;
						public size(): number;
						public removeAll(param0: java.util.Collection<any>): boolean;
						public contains(param0: any): boolean;
						public fetchNextPage(): java.util.List<any>;
						public lastIndexOf(param0: any): number;
						public subList(param0: number, param1: number): java.util.List<any>;
						public remove(param0: any): boolean;
						public add(param0: number, param1: any): void;
						public indexOf(param0: any): number;
						public atEndOfResults(): boolean;
						public remove(param0: number): any;
						public clear(): void;
						public addAll(param0: number, param1: java.util.Collection<any>): boolean;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB);
						public containsAll(param0: java.util.Collection<any>): boolean;
						public toArray(): native.Array<any>;
					}
					export module PaginatedList {
						export class PaginatedListIterator extends java.util.Iterator<any> {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedList.PaginatedListIterator>;
							public hasNext(): boolean;
							public remove(): void;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedList<any>, param1: boolean);
							public next(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class PaginatedParallelScanList<T>  extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedList<any> {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedParallelScanList<any>>;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask, param4: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy, param5: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig);
						public atEndOfResults(): boolean;
						public fetchNextPage(): java.util.List<any>;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class PaginatedQueryList<T>  extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedList<any> {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedQueryList<any>>;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy);
						public atEndOfResults(): boolean;
						public fetchNextPage(): java.util.List<any>;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param3: com.amazonaws.services.dynamodbv2.model.QueryRequest, param4: com.amazonaws.services.dynamodbv2.model.QueryResult, param5: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy, param6: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class PaginatedScanList<T>  extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedList<any> {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedScanList<any>>;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param3: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy);
						public atEndOfResults(): boolean;
						public fetchNextPage(): java.util.List<any>;
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param3: com.amazonaws.services.dynamodbv2.model.ScanRequest, param4: com.amazonaws.services.dynamodbv2.model.ScanResult, param5: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig.PaginationLoadingStrategy, param6: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapperConfig);
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: java.lang.Class<any>, param2: com.amazonaws.services.dynamodbv2.AmazonDynamoDB);
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class ParallelScanTask {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask>;
						public isAllSegmentScanFinished(): boolean;
						public getNextBatchOfScanResults(): java.util.List<com.amazonaws.services.dynamodbv2.model.ScanResult>;
						/** @deprecated */
						public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper, param1: com.amazonaws.services.dynamodbv2.AmazonDynamoDB, param2: java.util.List<com.amazonaws.services.dynamodbv2.model.ScanRequest>);
					}
					export module ParallelScanTask {
						export class SegmentScanState {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask.SegmentScanState>;
							public static Waiting: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask.SegmentScanState;
							public static Scanning: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask.SegmentScanState;
							public static Failed: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask.SegmentScanState;
							public static HasNextPage: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask.SegmentScanState;
							public static SegmentScanCompleted: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask.SegmentScanState;
							public static values(): native.Array<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask.SegmentScanState>;
							public static valueOf(param0: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ParallelScanTask.SegmentScanState;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class QueryResultPage<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.QueryResultPage<any>>;
						public setResults(param0: java.util.List<T>): void;
						public getLastEvaluatedKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public constructor();
						public setLastEvaluatedKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getResults(): java.util.List<T>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class ReflectionUtils {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ReflectionUtils>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class S3ClientCache {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3ClientCache>;
						public useClient(param0: com.amazonaws.services.s3.AmazonS3Client): void;
						public getTransferManager(param0: com.amazonaws.services.s3.model.Region): com.amazonaws.mobileconnectors.s3.transfermanager.TransferManager;
						public getClient(param0: com.amazonaws.services.s3.model.Region): com.amazonaws.services.s3.AmazonS3Client;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class S3Link {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3Link>;
						public uploadFrom(param0: native.Array<number>, param1: com.amazonaws.metrics.RequestMetricCollector): com.amazonaws.services.s3.model.PutObjectResult;
						public downloadTo(param0: java.io.OutputStream): com.amazonaws.services.s3.model.ObjectMetadata;
						public getBucketName(): string;
						public static fromJson(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3ClientCache, param1: string): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3Link;
						public getTransferManager(): com.amazonaws.mobileconnectors.s3.transfermanager.TransferManager;
						public getAmazonS3Client(): com.amazonaws.services.s3.AmazonS3Client;
						public setAcl(param0: com.amazonaws.services.s3.model.AccessControlList, param1: com.amazonaws.metrics.RequestMetricCollector): void;
						public toJson(): string;
						public getKey(): string;
						public uploadFrom(param0: java.io.File): com.amazonaws.services.s3.model.PutObjectResult;
						public setAcl(param0: com.amazonaws.services.s3.model.CannedAccessControlList): void;
						public downloadTo(param0: java.io.OutputStream, param1: com.amazonaws.metrics.RequestMetricCollector): com.amazonaws.services.s3.model.ObjectMetadata;
						public uploadFrom(param0: java.io.File, param1: com.amazonaws.metrics.RequestMetricCollector): com.amazonaws.services.s3.model.PutObjectResult;
						public getS3Region(): com.amazonaws.services.s3.model.Region;
						public uploadFrom(param0: native.Array<number>): com.amazonaws.services.s3.model.PutObjectResult;
						public setAcl(param0: com.amazonaws.services.s3.model.CannedAccessControlList, param1: com.amazonaws.metrics.RequestMetricCollector): void;
						public downloadTo(param0: java.io.File): com.amazonaws.services.s3.model.ObjectMetadata;
						public setAcl(param0: com.amazonaws.services.s3.model.AccessControlList): void;
						public downloadTo(param0: java.io.File, param1: com.amazonaws.metrics.RequestMetricCollector): com.amazonaws.services.s3.model.ObjectMetadata;
						public getUrl(): java.net.URL;
					}
					export module S3Link {
						export class ID {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3Link.ID>;
							public getKey(): string;
							public getRegionId(): string;
							public getBucket(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class ScanResultPage<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ScanResultPage<any>>;
						public setResults(param0: java.util.List<T>): void;
						public getLastEvaluatedKey(): java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>;
						public constructor();
						public setLastEvaluatedKey(param0: java.util.Map<string,com.amazonaws.services.dynamodbv2.model.AttributeValue>): void;
						public getResults(): java.util.List<T>;
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export class VersionIncrementor {
						public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.VersionIncrementor>;
						public increment(param0: java.lang.reflect.Method, param1: any): any;
					}
					export module VersionIncrementor {
						export class Incrementor {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.VersionIncrementor.Incrementor>;
							/**
							 * Constructs a new instance of the com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.VersionIncrementor$Incrementor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								increment(param0: any): any;
							});
							public constructor();
							public increment(param0: any): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class BooleanSetToNumberSetMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.NumberSetAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.BooleanSetToNumberSetMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.BooleanSetToNumberSetMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class BooleanToBooleanMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.BooleanAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.BooleanToBooleanMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.BooleanToBooleanMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class BooleanToNumberMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.NumberAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.BooleanToNumberMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.BooleanToNumberMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class ByteArraySetToBinarySetMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.BinarySetAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ByteArraySetToBinarySetMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ByteArraySetToBinarySetMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class ByteArrayToBinaryMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.BinaryAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ByteArrayToBinaryMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ByteArrayToBinaryMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class ByteBufferSetToBinarySetMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.BinarySetAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ByteBufferSetToBinarySetMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ByteBufferSetToBinarySetMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class ByteBufferToBinaryMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.BinaryAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ByteBufferToBinaryMarshaller>;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ByteBufferToBinaryMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class CalendarSetToStringSetMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringSetAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.CalendarSetToStringSetMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.CalendarSetToStringSetMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class CalendarToStringMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.CalendarToStringMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.CalendarToStringMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class CustomMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.CustomMarshaller>;
							public constructor(param0: java.lang.Class<any>);
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class DateSetToStringSetMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringSetAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.DateSetToStringSetMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.DateSetToStringSetMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class DateToStringMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.DateToStringMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.DateToStringMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class ListToListMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.ListAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ListToListMarshaller>;
							public getMemberMarshaller(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ListToListMarshaller;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller);
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class MapToMapMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.MapAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.MapToMapMarshaller>;
							public getMemberMarshaller(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.MapToMapMarshaller;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller);
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class NumberSetToNumberSetMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.NumberSetAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.NumberSetToNumberSetMarshaller>;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.NumberSetToNumberSetMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class NumberToNumberMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.NumberAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.NumberToNumberMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.NumberToNumberMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class ObjectSetToStringSetMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringSetAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ObjectSetToStringSetMarshaller>;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ObjectSetToStringSetMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class ObjectToMapMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.MapAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ObjectToMapMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.ObjectToMapMarshaller;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter);
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class S3LinkToStringMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.S3LinkToStringMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.S3LinkToStringMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class StringSetToStringSetMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringSetAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.StringSetToStringSetMarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.StringSetToStringSetMarshaller;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module marshallers {
						export class StringToStringMarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentMarshaller.StringAttributeMarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.StringToStringMarshaller>;
							public marshall(param0: any): com.amazonaws.services.dynamodbv2.model.AttributeValue;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.marshallers.StringToStringMarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export abstract class BSUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BSUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export abstract class BUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class BigDecimalSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BigDecimalSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BigDecimalSetUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class BigDecimalUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BigDecimalUnmarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BigDecimalUnmarshaller;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class BigIntegerSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BigIntegerSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BigIntegerSetUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class BigIntegerUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BigIntegerUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BigIntegerUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class BooleanSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BooleanSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BooleanSetUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class BooleanUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BooleanUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BooleanUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ByteArraySetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteArraySetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteArraySetUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ByteArrayUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteArrayUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteArrayUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ByteBufferSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteBufferSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteBufferSetUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ByteBufferUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.BUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteBufferUnmarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteBufferUnmarshaller;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ByteSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteSetUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ByteUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ByteUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class CalendarSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.CalendarSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.CalendarSetUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class CalendarUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.CalendarUnmarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.CalendarUnmarshaller;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class CustomUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.CustomUnmarshaller>;
							public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>);
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class DateSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.DateSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.DateSetUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class DateUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.DateUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.DateUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class DoubleSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.DoubleSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.DoubleSetUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class DoubleUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.DoubleUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.DoubleUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class FloatSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.FloatSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.FloatSetUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class FloatUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.FloatUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.FloatUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class IntegerSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.IntegerSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.IntegerSetUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class IntegerUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.IntegerUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.IntegerUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export abstract class LUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.LUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ListUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.LUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ListUnmarshaller>;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller);
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ListUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class LongSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.LongSetUnmarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.LongSetUnmarshaller;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class LongUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.LongUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.LongUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export abstract class MUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.MUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class MapUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.MUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.MapUnmarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.MapUnmarshaller;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller);
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export abstract class NSUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export abstract class NUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class NullableUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NullableUnmarshaller>;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller);
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ObjectUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.MUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ObjectUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ItemConverter, param1: java.lang.Class<any>);
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ObjectUnmarshaller;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class S3LinkUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.S3LinkUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public constructor(param0: com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.S3ClientCache);
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.S3LinkUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export abstract class SSUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SSUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export abstract class SUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ArgumentUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ShortSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ShortSetUnmarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ShortSetUnmarshaller;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class ShortUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.NUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ShortUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.ShortUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class StringSetUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SSUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.StringSetUnmarshaller>;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.StringSetUnmarshaller;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module amazonaws {
		export module mobileconnectors {
			export module dynamodbv2 {
				export module dynamodbmapper {
					export module unmarshallers {
						export class StringUnmarshaller extends com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.SUnmarshaller {
							public static class: java.lang.Class<com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.StringUnmarshaller>;
							public static instance(): com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.unmarshallers.StringUnmarshaller;
							public unmarshall(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue): any;
							public typeCheck(param0: com.amazonaws.services.dynamodbv2.model.AttributeValue, param1: java.lang.reflect.Method): void;
						}
					}
				}
			}
		}
	}
}

//Generics information:
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformer.Parameters:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.AttributeTransformerChain.ProxyParameters:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ConversionSchemas.Pair:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMapper.TransformerParameters:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBMarshaller:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.DynamoDBQueryExpression:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.JsonMarshaller:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedList:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedParallelScanList:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedQueryList:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.PaginatedScanList:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.QueryResultPage:1
//com.amazonaws.mobileconnectors.dynamodbv2.dynamodbmapper.ScanResultPage:1

