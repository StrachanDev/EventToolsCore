using System;
using Newtonsoft.Json;

namespace EventToolsCore.Domain.Utilities
{
    public class ClientIdentifierSerializer : JsonConverter
    {
        public override bool CanConvert(System.Type objectType)
        {
            return typeof(Identifier) == objectType;
        }

        public override object ReadJson(JsonReader reader, System.Type objectType, object existingValue, JsonSerializer serializer)
        {
            if ((reader?.TokenType ?? throw new ArgumentNullException(nameof(reader))) == JsonToken.Null)
                return null;
            string id = reader.Value?.ToString();
            return id == null ? null : new Identifier(id);
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            if (value is Identifier id)
            {
                if (id.IsEmpty())
                {
                    serializer.Serialize(writer, (string)Identifier.Empty());
                }

                else
                {
                    serializer.Serialize(writer, (string)id);
                }
            }
        }
    }
}
